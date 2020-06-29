import React from 'react';
import HeaderOff from './HeaderOff';
import Content from './Content';
import { Grid, Typography } from '@material-ui/core';
import Start from './Animation/start';
import Carousel from "./carousel";
import Footer from "../Commain/Footer"

export default function PrimarySearchAppBar() {
    return( 
       
       <Grid container direction="column"> 
            <Grid item> <HeaderOff/></Grid>
            <Grid item column direction="center"> <Carousel/></Grid>
            <Grid style={{marginBottom:"90px"}} item container>
                <Grid itemitem xs={0} sm={1}/>
              <Grid item container xs={12} sm={10}> <Content/></Grid> 
                <Grid item  xs={0} sm={1}/>
            </Grid>
            <Grid item> <Footer /></Grid>

    </Grid>

    )
};