import React from 'react';

import prof from './Images/profile.jpg'; 
import braw from './Images/brawlers.jpg'; 
import crow from './Images/crow.jpg'; 
import braw1 from './Images/brawlers1.jpg'; 
import './App.css';

function Profile() {
  return (
    <div className="profile">
      <h1>Welcome To My Brawl Stars Profile</h1>

      <div className='profile-list'>
        <div className='profile-info'>
          <h3>Profile</h3>
          <img src ={prof} alt=''/>
        </div>

        <div className='profile-info'>
          <h3>Highest Brawler</h3>
          <img src ={crow} alt=''/>
        </div>
        <hr/>
        <div className='profile-info'>
          <h3>Brawlers Collection list</h3> 
          <img src ={braw} alt=''/>
        </div>

        <div className='profile-info'>
          <h3>Brawlers Collection list</h3> 
          <img src ={braw1} alt=''/>
        </div>
      </div>
    </div>
  );
}

export default Profile ;
