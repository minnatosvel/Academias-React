import React from 'react';
import '../Styles/Menu.css'
//import MenuIcon from '@material-ui/icons/Menu';

function MenuBar(props) {

  const handleFilter=(event) =>{
    props.handleSelectedFilter(event.target.value);
  }

  return (

    <div>
      <button 
      className="menuBtn" 
      name='All'
      value='all'
      onClick={handleFilter}>All</button>
      <button 
      className="menuBtn" 
      name='Travel'
      value='travel'
      onClick={handleFilter}>Travel</button>
      <button 
      className="menuBtn" 
      name='Lifestyle'
      value='lifestyle'
      onClick={handleFilter}>Lifestyle</button>
      <button 
      className="menuBtn" 
      name='Business'
      value='business'
      onClick={handleFilter}>Business</button>
      <button 
      className="menuBtn" 
      name='Food'
      value='food'
      onClick={handleFilter}>Food</button>
      <button 
      className="menuBtn" 
      name='Work'
      value='work'
      onClick={handleFilter}>Work</button>
    </div>
  );
}

export default MenuBar;