import React, {Component} from 'react';  
const Input = (props) => {
    return (  
  <div style={{paddingTop:"15px",paddingLeft:"15px"}} className="form-group">
    <label style={{display:"block",fontStyle: "normal",fontWeight: "600",fontSize: "14px",lineHeight: "17px",color: "#7A7A7A",}} 
htmlFor={props.name} className="form-label">{props.title}</label>
    <input style={{width:"370px",height:"30px",backgroundColor: "#FAFAFA", border: "1px solid #E0E0E0",
boxSizing: "border-box",borderRadius:" 2px",}}
      className="form-input"
      id={props.name}
      name={props.name}
      type={props.type}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder} 
    />
  </div>
)
}

export default Input;