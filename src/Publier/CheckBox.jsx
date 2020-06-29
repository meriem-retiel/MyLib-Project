import React, {Component} from 'react';  
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const CheckBox = (props) => {
  const rows=props.options
  const classes = useStyles();
    return( <div >
  <div><label style={{  marginTop:"15px",fontWeight: "700",fontSize: "14px",marginBottom:"5px",display:"block",fontStyle: "normal",color: "#3F3F3F",}} >{props.title}</label></div> 
    <div style={{display: "inline-flex"}}className="checkbox-group">

 
          {rows.map((row) => (
              <span>
            
              <input style={{paddingRight:"15px"}}
              className="form-checkbox"
              id = {props.name}
              name={props.name}
           
              value={row}
          
              type="checkbox" /> 
              <label style={{paddingLeft:"15px",paddingRight:'25px',fontSize:" 14px",color: "#757575"}}>{row}</label>
      </span>
          ))}

         
      
     
       
    </div>
  </div>
);

}
export default CheckBox;