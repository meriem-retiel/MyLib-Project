import React, {Component} from 'react';  
const Input = (props) => {
    return (  
  <div style={{paddingTop:"15px",paddingLeft:"0px"}} className="form-group">
    <label style={{fontWeight: "700",fontSize: "14px",marginBottom:"5px",display:"block",fontStyle: "normal",color: "#3F3F3F",}} 
htmlFor={props.name} >{props.title}</label>
    <input style={{width:"300px",height:"35px",backgroundColor: "#FAFAFA", border: "1px solid #E0E0E0",
boxSizing: "border-box",borderRadius:" 2px",}}
      className="form-input"
      id={props.name}
      name={props.name}
      type={props.type}
      value={props.value}
      onChange={props.fct}
      placeholder={props.placeholder} 
    />
  </div>
)
}

export default Input;