import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import AssetsTable from './AssetsTable';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from '@mui/material';
import { styled } from '@mui/system';
import TableHeader from './TableHead';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: '2px solid #e0e0e0',
  verticalAlign: 'top',
  padding: theme.spacing(1),
  cursor: 'pointer', // Add this to make the rows clickable
}));

const StyledTableRow = styled(TableRow)({
  '&:nth-of-type(even)': {
    backgroundColor: '#f9f9f9',
  },
});

const Schools = () => {
  const { data } = useFetch('http://localhost:8080/eis/schools');
  const { data: totalTeachers } = useFetch('http://localhost:8080/eis/getTeachersBySchool');
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const[searchItem, setSearchItem]= useState('');
  const[regex,setRegex] = useState('');

  useEffect(() => {
    const fetchRowData = async () => {

      if (selectedRowId) {
        try {
          const response = await fetch(`http://localhost:8080/eis/school?_id=${selectedRowId}`);
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
  const handleSearchChange = (event)=>{
    setSearchItem(event.target.value);
  }
useEffect(()=>{
    fetch(`http://localhost:8080/eis/getSchoolsWithTheSameRegexExpression?regex=${searchItem}`)
    .then(res=>{
      return res.json()
    })
    .then(schoolRegex=>{
      setRegex(schoolRegex)
    })
},[searchItem])
   const getTotalTeachers = (schoolId) => {
    const schoolTotal = totalTeachers.find((entry) => entry.id === schoolId);
    return schoolTotal ? schoolTotal.count : '_';
  };
  return (
    <>
    <input
      type='text'
      placeholder='Search School'
      value={searchItem}
      onChange={handleSearchChange}
      className='map-search'
    />
      {selectedRowData && <AssetsTable assets={selectedRowData} />}
      {searchItem.length === 0?
        <TableContainer component={Paper} sx={{ width: '934px',paddingTop:'10px'}}>
        <Table>
          <TableHeader/>
          <TableBody>
            {data &&
              data.map((school) => (
                <StyledTableRow
                  key={school._id}
                  onClick={() => handleRowClick(school._id)}
                  sx={{ backgroundColor: selectedRowId === school._id ? '#cfd8dc' : 'inheriant' }}
                >
                  <StyledTableCell>{school._id}</StyledTableCell>
                  <StyledTableCell>{school.schoolName}</StyledTableCell>
                  <StyledTableCell>{school.headmaster ? school.headmaster._id : 'N/A'}</StyledTableCell>
                  <StyledTableCell>{getTotalTeachers(school._id)}</StyledTableCell>
                  <StyledTableCell>{school.schoolType}</StyledTableCell>
                  <StyledTableCell>1:{(school.students.femaleStudents + school.students.maleStudents)/(getTotalTeachers(school._id))}</StyledTableCell>
                  <StyledTableCell>{school.province}</StyledTableCell>
                  <StyledTableCell>{school.district}</StyledTableCell>
                  <StyledTableCell>{school.students.femaleStudents + school.students.maleStudents}</StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      :
      <TableContainer component={Paper} sx={{ width: '865px',paddingTop:'10px'}}>
        <Table>
        <TableHeader/>
          <TableBody>
            {regex &&
              regex.map((school) => (
                <StyledTableRow
                  key={school._id}
                  onClick={() => handleRowClick(school._id)}
                  sx={{ backgroundColor: selectedRowId === school._id ? '#cfd8dc' : 'inheriant' }}
                >
                  <StyledTableCell>{school._id}</StyledTableCell>
                  <StyledTableCell>{school.schoolName}</StyledTableCell>
                  <StyledTableCell>{school.headmaster ? school.headmaster._id : 'N/A'}</StyledTableCell>
                  <StyledTableCell>{getTotalTeachers(school._id)}</StyledTableCell>
                  <StyledTableCell>{school.schoolType}</StyledTableCell>
                  <StyledTableCell>1:{(school.students.femaleStudents + school.students.maleStudents)/(getTotalTeachers(school._id))}</StyledTableCell>
                  <StyledTableCell>{school.province}</StyledTableCell>
                  <StyledTableCell>{school.district}</StyledTableCell>
                  <StyledTableCell>{school.students.femaleStudents + school.students.maleStudents}</StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>  
    }
    </>
  );
};

export default Schools;
