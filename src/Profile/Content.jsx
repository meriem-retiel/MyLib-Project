import React from 'react';
import Typography from '@material-ui/core/Typography';
import AnnonceSmall from './AnnonceSmall';
import {Grid} from '@material-ui/core';
import data from './data';

import { makeStyles } from '@material-ui/core/styles';
import ProfilCard from './ProfilCard';


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
<Grid sm={12} >
    <ProfilCard/>
</Grid>

    <Grid item xs={12} sm={12}> <Typography className={classes.title}>Mes publications</Typography>    </Grid>  

    {data.map(coffeMakerObj => getAnnonceMakerCard(coffeMakerObj))}

 </Grid>
    )
}
export default Content;