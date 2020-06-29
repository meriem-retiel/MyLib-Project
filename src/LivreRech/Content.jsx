import React from 'react';
import {Grid} from '@material-ui/core';
import Publication from './Publication';
import posts from "./posts";

const Content =()=> {
    const getPublicationMakerCard = PublicationMakerObject =>{
        return (
            <Grid item xs={12} sm={12}>
        <Publication {...PublicationMakerObject}/>
        </Grid>)
    };
    return(
        <Grid container
       >
            {posts.map(PublicationMakerObj => getPublicationMakerCard(PublicationMakerObj))}
         
        </Grid>
    );
}
export default Content;