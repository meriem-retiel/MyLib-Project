import React from 'react';
import SearchBar from './SearchBar';
import Grid from '@material-ui/core/Grid';
import CheckBoxRow from './CheckBoxRow';


export default function searchComplete (){

    return(
//search component positionning
<Grid Container> 
<Grid item container>       
  <Grid item xs={0} sm={3}></Grid>
   <Grid item xs={12} sm={6}><SearchBar/> </Grid> 
  <Grid item xs={0} sm={3}></Grid>
</Grid> 

  <Grid item container >       
    <Grid item xs={0} sm={3}></Grid>
     <Grid item xs={12} sm={6}><CheckBoxRow/> </Grid> 
    <Grid item xs={0} sm={3}></Grid>
  </Grid>

  
</Grid>
    );
}