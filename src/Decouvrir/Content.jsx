import React from 'react';
import Typography from '@material-ui/core/Typography';
import AnnonceSmall from '../Commain/AnnonceSmall';
import {Grid} from '@material-ui/core';
import livres from './livres';
import { makeStyles } from '@material-ui/core/styles';


const Content =()=> {
    const getAnnonceMakerCard = annonceMakerObject =>{
        return (
            <Grid item xs={12} sm={3}>
        <AnnonceSmall {...annonceMakerObject}/>
        </Grid>)
    };
    const useStyles = makeStyles((theme) => ({
       title:{
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "24px",
        color:"#3F3F3F",
       }
    }));
    const classes = useStyles();
    return(
   
    <Grid container spacing={4}>
 
    {livres.map(coffeMakerObj => getAnnonceMakerCard(coffeMakerObj))} 

 </Grid>
   


           
          
    );
}
export default Content;