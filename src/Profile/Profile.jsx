import React from 'react';
import {Grid} from '@material-ui/core';
import Header from '../Commain/Header';
import Content from './Content';

function Profile() {
  return (


    <Grid container direction='column'>
      <Grid item>
      <Header/>
      </Grid>
      <Grid style={{marginTop:"30px"}}container>
        <Grid item xs={2} sm={1}/>
        <Grid item xs={8} sm={10}>
          <Content/>
        </Grid>
        <Grid item  xs={2} sm={1}/>
      </Grid>
    </Grid>
    
  );
}

export default Profile;
