import React from 'react';
import Typography from '@material-ui/core/Typography';
import AnnonceSmall from '../Commain/AnnonceSmall';
import {Grid} from '@material-ui/core';
import historique from './historique';
import recent from './recent';
import classique from './classique';
import divers from './divers';
import { makeStyles } from '@material-ui/core/styles';
import Start from './Animation/start';


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

    <Grid item xs={12} sm={12}> <Typography className={classes.title}>Ajouté recemment </Typography>    </Grid>  
    {recent.map(coffeMakerObj => getAnnonceMakerCard(coffeMakerObj))}
    <Grid item xs={12} sm={12}> <Typography className={classes.title}>Roman historique </Typography>    </Grid>  

    {historique.map(coffeMakerObj => getAnnonceMakerCard(coffeMakerObj))}
    <Grid item xs={12} sm={12}> <Typography className={classes.title}>Classique </Typography>    </Grid>  

    {classique.map(coffeMakerObj => getAnnonceMakerCard(coffeMakerObj))}
    <Grid item xs={12} sm={12}> <Typography className={classes.title}>Divers </Typography>    </Grid>  

    {divers.map(coffeMakerObj => getAnnonceMakerCard(coffeMakerObj))}

 </Grid>
   


           
          
    );
}
export default Content;