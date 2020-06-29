import React, {Component} from 'react';  
const Select = (props) => {
    return(
        <div style={{float: "left",paddingLeft:"15px",paddingTop:"15px"}} className="form-group">
            <label style={{fontStyle: "normal",fontWeight: "600",fontSize: "14px",lineHeight: "17px",color: "#7A7A7A",}}htmlFor={props.name}> {props.title} </label>
            <select 
            style={{width:"113px",height:"30px",backgroundColor: "#FAFAFA", border: "1px solid #E0E0E0",
            boxSizing: "border-box",borderRadius:" 2px",}}
              name={props.name}
              value={props.value}
              onChange={props.handleChange}
              >
              <option  value="" disabled>{props.placeholder}</option>
              {props.options.map(option => {
                return (
                  <option
               
                    key={option}
                    value={option}
                    label={option}>{option}
                  </option>
                );
              })}
            </select>
      </div>)
}

export default Select;