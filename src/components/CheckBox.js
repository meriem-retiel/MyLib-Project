import React, {Component} from 'react';  
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const CheckBox = (props) => {
  const rows=props.options
  const classes = useStyles();
    return( <div style={{display: "inline-flex"}} >
   
    <div style={{display: "inline-flex"}}className="checkbox-group">
    
    
          <TableContainer style={{backgroundColor:'#FAFAFA'}}>
            <Table  aria-label="simple table">
          
          <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="right">id</TableCell>
 
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row}>
              <TableCell style={{height:"25px "}} component="th" scope="row">
              <input
              className="form-checkbox"
              id = {props.name}
              name={props.name}
              onChange={props.handleChange}
              value={row}
              checked={ props.selectedOptions.indexOf(row) > -1 }
              type="checkbox" /> 
      
              </TableCell>
              <TableCell style={{height:'25px'}} component="th" scope="row">
                {row}
              </TableCell>
          
            </TableRow>
          ))}
        </TableBody>
           
          </Table>
          </TableContainer>
         
      
     
       
    </div>
  </div>
);

}
export default CheckBox;