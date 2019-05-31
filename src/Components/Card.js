import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';


function CardB(props) {

  const useStyle = { 
    borderRadius: "0",
    borderWidth: "0",
    color: "white"
  };

  const imgStyle = {
    position: 'absolute',
    padding: '30px',
    bottom: "0"
  };
  
    return props.posts.map((post)=> ( 
      <Grid item xs={12} sm={6}>
        <Card style={useStyle}>
          <CardActionArea>
            <CardMedia
              component="img" height="360px" src={post.image} 
            />
            <CardContent style={imgStyle}>
              <Typography gutterBottom variant="h5" component="h2">
                {post.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {post.shortDescription}
              </Typography>
              <Typography style={{textTransform: 'uppercase', fontWeight: 'bold'}}>
                {post.category}
              </Typography>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
        </Grid>
    )
  );
}

export default CardB;