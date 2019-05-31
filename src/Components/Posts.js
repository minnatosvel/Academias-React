import React from 'react';
import CardB from './Card';
import { Grid } from '@material-ui/core';

function Posts(props){

    return(

    <Grid container> 
        <CardB posts = {props.posts} />
    </Grid>
    )

}

export default Posts;