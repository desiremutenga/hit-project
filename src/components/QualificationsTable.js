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

const QualificationsTable = ({teacherId}) => {

let filteredData = null

  if(Array.isArray(teacherId)&&teacherId.length >0 && typeof teacherId[0]=== 'object'&& teacherId[0] !== null){
    filteredData = teacherId;
  }
  console.log(filteredData)
  return (
    <TableContainer component={Paper} sx={{ maxWidth: '100%', marginTop: '10px',marginBottom:'20px' }}>
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
          {filteredData &&
            filteredData.map((teacher) => (
              <StyledTableRow key={teacher._id}>
                <StyledTableCell>{teacher.qualifications.map((type)=>(type.type)).join(',')}</StyledTableCell>
                <StyledTableCell>{teacher.qualifications.map((name)=>(name.name)).join(',')}</StyledTableCell>
                <StyledTableCell>{teacher.qualifications.map((institute)=>(institute.institute)).join(',')}</StyledTableCell>
                <StyledTableCell>{teacher.qualifications.map((year)=>(year.year)).join(',')}</StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default QualificationsTable;
