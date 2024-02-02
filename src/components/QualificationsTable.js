import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper} from '@mui/material';
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

const QualificationsTable = ({qualifications }) => {

  return (
    <>
    <TableContainer component={Paper} sx={{ maxWidth: '100%', marginTop: '10px', marginBottom: '20px' }}>
      <Table>
        <TableHead>
          <StyledTableRow className='table-headers'>
            <StyledTableCell>Qualification Type</StyledTableCell>
            <StyledTableCell>Qualification Name</StyledTableCell>
            <StyledTableCell>Institute</StyledTableCell>
            <StyledTableCell>Year of Issue</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {qualifications &&
            qualifications.map((teacher) => (
              <StyledTableRow key={teacher._id}>
                <StyledTableCell>{teacher.qualifications?.map((type) => <li>{type.type}</li>)}</StyledTableCell>
                <StyledTableCell>{teacher.qualifications?.map((name) => <li>{name.name}</li>)}</StyledTableCell>
                <StyledTableCell>{teacher.qualifications?.map((institute) => <li>{institute.institute}</li>)}</StyledTableCell>
                <StyledTableCell>{teacher.qualifications?.map((year) => <li>{year.year}</li>)}</StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};

export default QualificationsTable;
