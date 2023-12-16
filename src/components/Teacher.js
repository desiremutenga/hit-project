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
  borderBottom: '1px solid #e0e0e0',
  verticalAlign: 'top',
  padding: theme.spacing(1),
}));

const StyledTableRow = styled(TableRow)({
  '&:nth-of-type(even)': {
    backgroundColor: '#f9f9f9',
  },
});

const TeachersTable = () => {
  const { data } = useFetch('http://localhost:8080/eis/getAllTeachers');
  const age = 1000 * 60 * 60 * 24 * 365.25;

  return (
    <TableContainer component={Paper} sx={{ width: '86vw' }}>
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
          {data &&
            data.map((teacher) => (
              <StyledTableRow key={teacher._id}>
                <StyledTableCell>{teacher._id}</StyledTableCell>
                <StyledTableCell>{teacher.firstName}</StyledTableCell>
                <StyledTableCell>{teacher.lastName}</StyledTableCell>
                <StyledTableCell>
                  {Math.floor((( new Date()-new Date(`${teacher.dob}`)) / age))}
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
  );
};

export default TeachersTable;
