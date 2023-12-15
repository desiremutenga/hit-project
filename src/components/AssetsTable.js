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
  
  const AssetsTable = ({assets}) => {
  
  let filteredData = null
  
    if(Array.isArray(assets)&&assets.length >0 && typeof assets[0]=== 'object'&& assets[0] !== null){
      filteredData = assets;
    }
    return (
      <TableContainer component={Paper} sx={{ maxWidth: '100%', marginTop: '10px',marginBottom:'20px' }}>
        <Table>
          <TableHead>
            <StyledTableRow className='table-headers'>
              <StyledTableCell>Computers</StyledTableCell>
              <StyledTableCell>Classrooms</StyledTableCell>
              <StyledTableCell>Library</StyledTableCell>
              <StyledTableCell>Labs</StyledTableCell>
              <StyledTableCell>Vehicles</StyledTableCell>
              <StyledTableCell>Books</StyledTableCell>
              <StyledTableCell>Desks</StyledTableCell>
              <StyledTableCell>Chairs</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {filteredData &&
              filteredData.map((assets) => (
                <StyledTableRow key={assets._id}>
                  <StyledTableCell>{assets.assets.totalComputers}</StyledTableCell>
                  <StyledTableCell>{assets.assets.totalClassrooms}</StyledTableCell>
                  <StyledTableCell>{assets.assets.hasLibrary}</StyledTableCell>
                  <StyledTableCell>{assets.assets.totalLabs}</StyledTableCell>
                  <StyledTableCell>{assets.assets.noOfVehicles}</StyledTableCell>
                  <StyledTableCell>{assets.assets.totalBooks}</StyledTableCell>
                  <StyledTableCell>{assets.assets.furniture.totalDesks}</StyledTableCell>
                  <StyledTableCell>{assets.assets.furniture.totalChairs}</StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
  
  export default AssetsTable;
  