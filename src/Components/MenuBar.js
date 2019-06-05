import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import '../Styles/Menu.css'
//import MenuIcon from '@material-ui/icons/Menu';

// function clickedFilter(){
  
// }

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {

    flexGrow: 1,
  },
}));

function MenuBar(props) {

  const [filterCategory, setFilterCategory] = useState('all');
  
  //const postsFiltered = props.posts.filter((postsfltr) => postsfltr.category == 'travel');
  //console.log(postsFiltered); 

  const classes = useStyles();
  return (

    <div>
      <AppBar className="appbar" position="static">
        <Toolbar className="toolbar" centered>
          <Button 
          className="menuBtn" 
          name='All'
          value='all'>All</Button>
          <Button 
          className="menuBtn" 
          name='Travel'
          value='travel'
          onClick={(event) => setFilterCategory(event.target.value)}>Travel</Button>
          <Button 
          className="menuBtn" 
          name='Lifestyle'
          value='lifestyle'>Lifestyle</Button>
          <Button 
          className="menuBtn" 
          name='Business'
          value='business'>Business</Button>
          <Button 
          className="menuBtn" 
          name='Food'
          value='food'>Food</Button>
          <Button 
          className="menuBtn" 
          name='Work'
          value='work'>Work</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MenuBar;