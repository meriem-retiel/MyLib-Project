import React from 'react';
import Header from '../Commain/Header';
import Content from './Content';
import { Grid, Typography } from '@material-ui/core';
import Footer from "../Commain/Footer"
import Filter from "./Filter"
import CustomizedInputBase from "./yara/SearchBar"

export default function PrimarySearchAppBar() {
    return( 
      
       <Grid container direction="column"> 
       <Grid  item ><Header/></Grid>
        <Grid item justify="center"  container style={{marginTop:'40px'}}
  direction="row"> <CustomizedInputBase /></Grid>
            <Grid style={{marginBottom:"90px"}} item container>
                <Grid item xs={0} sm={2}>  <Filter/></Grid> 
              <Grid item container xs={12} sm={9}> <Content/></Grid> 
            </Grid>
            <Grid item> <Footer /></Grid>

    </Grid>

    )
};