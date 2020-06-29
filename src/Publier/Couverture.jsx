import React from 'react';


import { Grid, Typography } from '@material-ui/core';
import AnnonceSmall from './AnnonceSmall';
import Cropper from './ImgDropAndCrop'




export default function Couverture() {

    return( 
       
       <Grid  container
       direction="row"
       justify="center"
       alignItems="center" > 
   <Cropper/>
    </Grid>

    )
};