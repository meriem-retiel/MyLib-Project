import React from 'react';
import {Grid} from '@material-ui/core';
import Publication from './Publication';
import data from './data';

const Content =()=> {
    const getPublicationMakerCard = PublicationMakerObject =>{
        return (
            <Grid item xs={12} sm={12}>
        <Publication {...PublicationMakerObject}/>
        </Grid>)
    };
    return(
        <Grid  container spacing={1}>
            <Grid item xs={12} sm={12}>
            {data.map(PublicationMakerObj => getPublicationMakerCard(PublicationMakerObj))}
            </Grid>
           
        </Grid>
    );
}
export default Content;