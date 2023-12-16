import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import AssetsTable from './AssetsTable';
import useSharedState from '.././hooks/useSharedState'
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

// ... other imports

const SchoolsTable = () => {
  const { data } = useFetch('http://localhost:8080/eis/schools');

  const [selectedRowId, setSelectedRowId] = useState(null);
  const [selectedRowData, setSelectedRowData] = useState(null);


  useEffect(() => {
    const fetchRowData = async () => {
      if (selectedRowId) {
        try {
          const response = await fetch(`http://localhost:8080/eis/school?_id=${selectedRowId}`);
          const rowData = await response.json();

          setSelectedRowData(rowData);
          // const teachers = useFetch(`http://localhost:8080/eis/getTeacherBySchool?currentSchool=${selectedRowData}`)
        } catch (error) {
          console.error('Error fetching data from the database', error);
          // Handle errors appropriately
        }
      }
    };

    fetchRowData();
  }, [selectedRowId]);

  const handleRowClick = (rowId) => {
    setSelectedRowId(rowId);
  };

  return (
    <>
      {selectedRowData && <AssetsTable assets={selectedRowData} />}
      <TableContainer component={Paper} sx={{ width: '933px'}}>
        <Table>
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Headmaster</StyledTableCell>
              <StyledTableCell>Type</StyledTableCell>
              <StyledTableCell>Province</StyledTableCell>
              <StyledTableCell>District</StyledTableCell>
              <StyledTableCell>Male</StyledTableCell>
              <StyledTableCell>Female</StyledTableCell>
              <StyledTableCell>Students</StyledTableCell>
              {/* <StyledTableCell>Teachers</StyledTableCell> */}
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map((school) => (
                <StyledTableRow
                  key={school._id}
                  onClick={() => handleRowClick(school._id)}
                  // Add a different background color for the selected row
                  sx={{ backgroundColor: selectedRowId === school._id ? '#cfd8dc' : 'inheriant' }}
                >
                  <StyledTableCell>{school._id}</StyledTableCell>
                  <StyledTableCell>{school.schoolName}</StyledTableCell>
                  <StyledTableCell>{school.headmaster ? school.headmaster._id : 'N/A'}</StyledTableCell>
                  <StyledTableCell>{school.schoolType}</StyledTableCell>
                  <StyledTableCell>{school.province}</StyledTableCell>
                  <StyledTableCell>{school.district}</StyledTableCell>
                  <StyledTableCell>{school.students.maleStudents}</StyledTableCell>
                  <StyledTableCell>{school.students.femaleStudents}</StyledTableCell>
                  <StyledTableCell>{school.students.femaleStudents + school.students.maleStudents}</StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default SchoolsTable;
