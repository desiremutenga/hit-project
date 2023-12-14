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

const Headmaster = () => {
  const { data } = useFetch('http://localhost:8080/eis/headmasters');
  const age = 1000 * 60 * 60 * 24 * 365.25;

  return (
    <TableContainer component={Paper} sx={{ maxWidth: '100%', margin: '40px auto' }}>
      <Table>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Ec_No</StyledTableCell>
            <StyledTableCell>First Name</StyledTableCell>
            <StyledTableCell>Last Name</StyledTableCell>
            <StyledTableCell>Age</StyledTableCell>
            <StyledTableCell>Gender</StyledTableCell>
            <StyledTableCell>Type</StyledTableCell>
            <StyledTableCell>Qualification Name</StyledTableCell>
            <StyledTableCell>Institute Of Issue</StyledTableCell>
            <StyledTableCell>Year Issued</StyledTableCell>
            <StyledTableCell>Enrollment Year</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map((headmasters) => (
              <StyledTableRow key={headmasters._id}>
                <StyledTableCell>{headmasters._id}</StyledTableCell>
                <StyledTableCell>{headmasters.firstName}</StyledTableCell>
                <StyledTableCell>{headmasters.lastName}</StyledTableCell>
                <StyledTableCell>
                  {((Date.now() - headmasters.DOB) / age).toFixed(2)}
                </StyledTableCell>
                <StyledTableCell>{headmasters.gender}</StyledTableCell>
                <StyledTableCell>{headmasters.qualifications.map(type=>type.type)}</StyledTableCell>
                <StyledTableCell>{headmasters.qualifications.map(type=>type.name)}</StyledTableCell>
                <StyledTableCell>{headmasters.qualifications.map(type=>type.institute)}</StyledTableCell>
                <StyledTableCell>{headmasters.qualifications.map(type=>type.year)}</StyledTableCell>
                <StyledTableCell>{headmasters.enrollmentYear}</StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Headmaster;
