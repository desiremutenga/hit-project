import useFetch from '../hooks/useFetch';
import { useState, useEffect } from 'react';
import QualificationsTable from './QualificationsTable';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,} from '@mui/material';
import { styled } from '@mui/system';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: '1px solid #e0e0e0',
  verticalAlign: 'top',
  padding: theme.spacing(1),
  cursor: 'pointer'
}));

const StyledTableRow = styled(TableRow)({
  '&:nth-of-type(even)': {
    backgroundColor: '#f9f9f9',
  },
});

const Headmaster = () => {
  const { data } = useFetch('http://localhost:8080/eis/headmasters');
  const age = 1000 * 60 * 60 * 24 * 365.25;
  const [selectedRowId, setSelectedRowId] = useState('');
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [ecNumber, setEcNumber] = useState('');
  const[result, setResult] = useState(null);

  useEffect(() => {
    const fetchRowData = async () => {
      if (selectedRowId) {
        try {
          const response = await fetch(`http://localhost:8080/eis/getHeadmasterById?id=${selectedRowId}`);
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
  const handleEcNumber= (event)=>{
    setEcNumber(event.target.value)
  }
  useEffect(()=>{
    fetch(`http://localhost:8080/eis/getHeadmasterStartsWithEcNumber?ecNumber=${ecNumber}`)
    .then(res=>{
      return res.json()
    })
    .then(data=>{
      setResult(data)
    })
  })
  return (
    <>
    <input
      type='text'
      placeholder='EC-123456-X'
      value={ecNumber}
      onChange={handleEcNumber}
    />
     {selectedRowData?(<QualificationsTable qualifications={[selectedRowData]} id={selectedRowData._id} />):console.log()}
      <TableContainer component={Paper} sx={{ width: '86vw' }}>
      <Table>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Ec_No</StyledTableCell>
            <StyledTableCell>First Name</StyledTableCell>
            <StyledTableCell>Last Name</StyledTableCell>
            <StyledTableCell>Age</StyledTableCell>
            <StyledTableCell>Gender</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>Enrolled Year</StyledTableCell>     
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {result === null
            ?data &&
              data.map((headmasters) => (
                <StyledTableRow key={headmasters._id}
                onClick={() => handleRowClick(headmasters._id)}
                sx={{ backgroundColor: selectedRowId === headmasters._id ? '#cfd8dc' : 'inheriant' }}>
                  <StyledTableCell>{headmasters._id}</StyledTableCell>
                  <StyledTableCell>{headmasters.firstName}</StyledTableCell>
                  <StyledTableCell>{headmasters.lastName}</StyledTableCell>
                  <StyledTableCell>
                  {Math.floor((( new Date()-new Date(`${headmasters.dob}`)) / age))}
                  </StyledTableCell>
                  <StyledTableCell>{headmasters.gender}</StyledTableCell>
                  <StyledTableCell>{headmasters.firstName.toLowerCase() +"_"+headmasters.lastName.toLowerCase()+"@gmail.com"}</StyledTableCell>
                  <StyledTableCell>{headmasters.enrollmentYear}</StyledTableCell>
                </StyledTableRow>
              ))
            : result &&
              result.map((headmasters) => (
                <StyledTableRow key={headmasters._id}
                onClick={() => handleRowClick(headmasters._id)}
                sx={{ backgroundColor: selectedRowId === headmasters._id ? '#cfd8dc' : 'inheriant' }}>
                  <StyledTableCell>{headmasters._id}</StyledTableCell>
                  <StyledTableCell>{headmasters.firstName}</StyledTableCell>
                  <StyledTableCell>{headmasters.lastName}</StyledTableCell>
                  <StyledTableCell>
                  {Math.floor((( new Date()-new Date(`${headmasters.dob}`)) / age))}
                  </StyledTableCell>
                  <StyledTableCell>{headmasters.gender}</StyledTableCell>
                  <StyledTableCell>{headmasters.firstName.toLowerCase() +"_"+headmasters.lastName.toLowerCase()+"@gmail.com"}</StyledTableCell>
                  <StyledTableCell>{headmasters.enrollmentYear}</StyledTableCell>
                </StyledTableRow>
              )) 
          }
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};

export default Headmaster;
