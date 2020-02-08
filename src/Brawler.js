import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Brawler(props) {
  

  return (
    <div className="about">
      <div className='brawler'>
        <h3>{props.item.name}</h3>
        <Link to = { '/brawlerinfo/' + props.id } 
        style={{textDecoration:'none', color :'white'}}>
        <button >Visit</button></Link>
      </div>
    </div>
  );
}

export default Brawler ;
  