import React from 'react';
import {Grid} from '@material-ui/core';
import Header from '../Commain/Header';
import Content from './Content';
import Footer from '../Commain/Footer';

function LivreRecherche() {
  return (


    <Grid container direction='column'>
      <Grid item>
     <Header/>
      </Grid>
      <Grid style={{marginBottom:"90px"}} container>
        <Grid item xs={2} sm={3}/>
        <Grid item  xs={8} sm={6}>
          <Content/>
        </Grid>
        <Grid item  xs={2} sm={3}/>
      </Grid>
      <Grid item> <Footer /></Grid>
    </Grid>
    
  );
}

export default LivreRecherche;
