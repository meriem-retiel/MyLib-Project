import React, {Component} from 'react';  


const Select = (props) => {
    return(
        <div style={{paddingTop:"15px"}} className="form-group">
           <div> <label style={{fontWeight: "700",fontSize: "14px",marginBottom:"5px",display:"block",fontStyle: "normal",color: "#3F3F3F",}}  htmlFor={props.name}> {props.title} </label>
           </div>
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