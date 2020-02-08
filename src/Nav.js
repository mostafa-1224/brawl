import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Nav() {
  return (
    <nav className = "nav"> 
        <Link to='/' style={{textDecoration:'none'}}><h3>Brawl <span style = {{color:'#ef1919', fontSize : '22px'}}>Stars</span></h3></Link>
        
        <ul className = 'nav-links'>
          <Link to='/profile' style={{textDecoration:'none'}}>
            <li>Profile</li>
          </Link>
          <Link to='/brawlers' style={{textDecoration:'none'}}>
            <li>Brawlers</li>
          </Link>
        </ul>
    </nav>
    
  );
}

export default Nav ;
