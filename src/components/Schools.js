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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: '2px solid #e0e0e0',
  verticalAlign: 'top',
  padding: theme.spacing(1),
}));

const StyledTableRow = styled(TableRow)({
  '&:nth-of-type(even)': {
    backgroundColor: '#f9f9f9',
  },
});

const SchoolsTable = () => {
  const { data } = useFetch('http://localhost:8080/eis/schools');

  return (
    <TableContainer component={Paper} sx={{ maxWidth: '100%', margin: '40px auto' }}>
      <Table>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Headmaster</StyledTableCell>
            <StyledTableCell>Type</StyledTableCell>
            <StyledTableCell>Province</StyledTableCell>
            <StyledTableCell>District</StyledTableCell>
            <StyledTableCell>Male Students</StyledTableCell>
            <StyledTableCell>Female Students</StyledTableCell>
            <StyledTableCell>Total Students</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map((school) => (
              <StyledTableRow key={school._id}>
                <StyledTableCell>{school._id}</StyledTableCell>
                <StyledTableCell>{school.schoolName}</StyledTableCell>
                <StyledTableCell>{school.headmaster._id}</StyledTableCell>
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
  );
};

export default SchoolsTable;
