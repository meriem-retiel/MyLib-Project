import React from 'react';
import {Grid} from '@material-ui/core';
import Messenger from './safa/components/Messenger';
function Actualite() {
  return (


    <Grid container direction='column'>
      <Grid item>

      </Grid>
      <Grid container>
        <Grid item xs={2} sm={1}/>
        <Grid item xs={8} sm={10}>
          <Messenger/>
        </Grid>
        <Grid item  xs={2} sm={1}/>
      </Grid>
    </Grid>
    
  );
}

export default Actualite;
