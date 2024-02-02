import useFetch from '../hooks/useFetch';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { styled } from '@mui/system';
import { useState, useEffect } from 'react';
import QualificationsTable from './QualificationsTable';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: '1px solid #e0e0e0',
  verticalAlign: 'top',
  padding: theme.spacing(1),
  cursor: 'pointer', // Add this to make the rows clickable

}));

const StyledTableRow = styled(TableRow)({
  '&:nth-of-type(even)': {
    backgroundColor: '#f9f9f9',
  },
});

const TeachersTable = () => {
  const { data } = useFetch('http://localhost:8080/eis/getAllTeachers');
  const [selectedRowId, setSelectedRowId] = useState('');
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [searchItem, setSearchItem] = useState(null);
  const[searchedResult, setSearchedResult] = useState([])
  const [subject,setSubject] = useState('');
  const [school,setSchool] = useState('');
  const [ecNumber,setEcNumber] = useState('');
  useEffect(() => {
    const fetchRowData = async () => {
      if (selectedRowId) {
        try {
          const response = await fetch(`http://localhost:8080/eis/searchTeacherById?_id=${selectedRowId}`);
          const rowData = await response.json();
          setSelectedRowData(rowData);
        } catch (error) {
          console.error('Error fetching data from the database', error);
        }
      }
    };

    fetchRowData();
  }, [selectedRowId]);

  const handleRowClick = (rowId) => {
    setSelectedRowId(rowId);
  };
  const handleSearch = (event)=>{
    setSearchItem(event.target.value);
  }
  const handleSubject = (event)=>{
    setSubject(event.target.value)
  }
  const handleSchool = (event)=>{
    setSchool(event.target.value)
  }
  const handleTransverse = ()=>{
    fetch(`http://localhost:8080/eis/findTeacherBySchoolAndSubject?school=${school}&subject=${subject}`)
    .then(res=>{
      return res.json()})
    .then(data=>{
      setSearchedResult(data)
      setSchool('')
      setSubject('')
    })
  }
  const handleSearchEcNumber =(event)=>{
    setEcNumber(event.target.value)
  }
  useEffect(()=>{
    fetch(`http://localhost:8080/eis/getAllTeachersOnTheSameSchool?regex=${searchItem}`)
    .then(res=>{
      return res.json()
    })
    .then(data=>{
      setSearchedResult(data)
    })

  },[searchItem])
  useEffect(()=>{
    fetch(`http://localhost:8080/eis/getTeacherStartsWithEcNumber?ecNumber=${ecNumber}`)
    .then(res=>{return res.json()})
    .then(data=> setSearchedResult(data))
  },[ecNumber])
  return (
   <>
    <div>
    <input
      type='text'
      placeholder='School'
      value={searchItem}
      onChange={handleSearch}
   />
      <input
      type='text'
      placeholder='ec-number'
      value={ecNumber}
      onChange={handleSearchEcNumber}
   />
    </div>
 
       {selectedRowData?(<QualificationsTable qualifications={[selectedRowData]} id={selectedRowData._id} />):console.log()}
    <TableContainer component={Paper} sx={{ width: '85vw',padding:'5px' }}>
      <Table>
        <TableHead>
          <StyledTableRow className='table-headers'>
            <StyledTableCell>Ec_No</StyledTableCell>
            <StyledTableCell>First Name</StyledTableCell>
            <StyledTableCell>Last Name</StyledTableCell>
            <StyledTableCell>Age</StyledTableCell>
            <StyledTableCell>Gender</StyledTableCell>
            <StyledTableCell>Current School</StyledTableCell>
            <StyledTableCell>Subjects</StyledTableCell>
            <StyledTableCell>Enrolled Year</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
     {searchedResult.length !== 0
              ? searchedResult &&
                searchedResult.map((teacher) => (
                <StyledTableRow key={teacher._id}
                onClick={() => handleRowClick(teacher._id)}
                sx={{ backgroundColor: selectedRowId === teacher._id ? '#cfd8dc' : 'inheriant' }}>
                  <StyledTableCell>{teacher._id}</StyledTableCell>
                  <StyledTableCell>{teacher.firstName}</StyledTableCell>
                  <StyledTableCell>{teacher.lastName}</StyledTableCell>
                  <StyledTableCell>
                    {Math.floor((( new Date()-new Date(`${teacher.dob}`)) /(1000 * 60 * 60 * 24 * 365.25)))}
                  </StyledTableCell>
                  <StyledTableCell>{teacher.gender}</StyledTableCell>
                  <StyledTableCell>{teacher.currentSchool.schoolName}</StyledTableCell>
                  <StyledTableCell>
                    {teacher.subjectTaught.map((sub) => sub.subject).join(', ')}
                  </StyledTableCell>
                  <StyledTableCell>{teacher.enrollmentYear}</StyledTableCell>
                </StyledTableRow>
              ))
              : 
              data && data.map((teacher) => (
                  <StyledTableRow key={teacher._id}
                  onClick={() => handleRowClick(teacher._id)}
                  sx={{ backgroundColor: selectedRowId === teacher._id ? '#cfd8dc' : 'inheriant' }}>
                    <StyledTableCell>{teacher._id}</StyledTableCell>
                    <StyledTableCell>{teacher.firstName}</StyledTableCell>
                    <StyledTableCell>{teacher.lastName}</StyledTableCell>
                    <StyledTableCell>
                      {Math.floor((( new Date()-new Date(`${teacher.dob}`)) /(1000 * 60 * 60 * 24 * 365.25)))}
                    </StyledTableCell>
                    <StyledTableCell>{teacher.gender}</StyledTableCell>
                    <StyledTableCell>{teacher.currentSchool.schoolName}</StyledTableCell>
                    <StyledTableCell>
                      {teacher.subjectTaught.map((sub) => sub.subject).join(', ')}
                    </StyledTableCell>
                    <StyledTableCell>{teacher.enrollmentYear}</StyledTableCell>
                  </StyledTableRow>
                  
                ))}
    
        </TableBody>
      </Table>
    </TableContainer>
    <div  className='input_fields'>
       <input type="text" placeholder='school' value={school} onChange={handleSchool} />
       <input type="text" placeholder='subject' value={subject} onChange={handleSubject}/>
    </div>
    <button type="button" onClick={handleTransverse} className='btn'>SEARCH</button>
    </>
  );
};

export default TeachersTable;
