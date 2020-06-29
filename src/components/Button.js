import React, {Component} from 'react';  
import Button from '@material-ui/core/Button';
const ButtonSub = (props) => {
    console.log(props.style);
    return(
        <Button variant="contained" color="primary" onClick={props.action}>
{props.title}
</Button>)
}

export default ButtonSub;