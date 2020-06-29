import React from "react";
import ReactDom from "react-dom";
import {createMuiTheme,ThemeProvider} from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette:{
        primary : {
            main:"#191919"
        },
        secondary:{
            main:'#009ACB',
        },
        error:{
            main:'#E0E0E0',
        },
        background:
        {
            paper:"white",
        }
        
    },
    typography: {
      
        h5 :{
            fontSize: '16px',
            fontWeight:'normal',
            },
        h4:{
            fontFamily:'Roboto Slab',
            fontSize:'16px',
            fontWeight:'normal',
            color:'#3F3F3F',
        },
        h3:{
            fontSize: '14px',
            fontWeight: 'normal',
            color:'#757575',
        },
        h6:{
            fontSize:'10px',
        },
      
        profileName :{
        fontFamily: "Roboto",
        letterSpacing: "-0.01562em",
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '13px',
        lineHeight:'15px',
        },
    }
 
})
export default theme;