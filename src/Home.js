import React from 'react';
import Icon from './Images/icon.png'; 
import './App.css';

function Home (){

  return (
    <div className='intro'>

      <h1>Brawl Stars</h1>
      <img src={Icon} height="160" width="160" alt='no-data' />


    </div>
  )
}

export default Home;