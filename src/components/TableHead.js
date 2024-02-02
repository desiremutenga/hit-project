import {TableHead,TableCell,TableRow} from '@mui/material';
import { styled } from '@mui/system';
const TableHeader = () => {

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
      
    return ( 
        <TableHead>
         <StyledTableRow>
             <StyledTableCell>ID</StyledTableCell>
             <StyledTableCell>Name</StyledTableCell>
             <StyledTableCell>Headmaster</StyledTableCell>
             <StyledTableCell>Teachers</StyledTableCell>
             <StyledTableCell>Type</StyledTableCell>
             <StyledTableCell>S/TRatio</StyledTableCell>
             <StyledTableCell>Province</StyledTableCell>
             <StyledTableCell>District</StyledTableCell>
             <StyledTableCell>Students</StyledTableCell>
          </StyledTableRow>
      </TableHead>
     );
}
 
export default TableHeader;