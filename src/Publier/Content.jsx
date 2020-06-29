import React from 'react';
import Header from '../Commain/Header';
import Content from './Content';
import { Grid, Typography } from '@material-ui/core';
import Footer from "../Commain/Footer";
import Publier from "./Publier"



export default function PrimarySearchAppBar() {
    return( 
        <Grid>
        <Grid  item ><Header/></Grid>
       <Grid style={{marginTop:"30px"}} container direction="row" justify="center"> 
        <Grid item xs={0} sm={2}/>
        <Grid item  xs={12} sm={8}> <Publier /></Grid>
            
            <Grid item xs={0} sm={2}/>

    </Grid>
    </Grid>
    )
};