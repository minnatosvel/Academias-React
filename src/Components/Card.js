import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


function MediaCard(postItem) {
  
    return(

    <Card className="cardClass">
      <CardActionArea>
        <CardMedia
          // image={postItem.image}
          // title={postItem.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {console.log ('hola',postItem)}
            {postItem.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {postItem.shortDescription}
          </Typography>
          <Typography variant="h6" color="textSecondary" component="p">
            {postItem.category}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    );
}

export default MediaCard;