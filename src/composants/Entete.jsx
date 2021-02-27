import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './Entete.scss';
import avatar from '../images/avatar.png';

export default function Entete() {
  return (
    <header className="Entete">
      <div className="logo">Signets</div> 
      <div className="avatar"> Kristian, Chung <Avatar style={{marginLeft:20, marginRight:10}}><img src={avatar} alt="Camille Semaan" /></Avatar></div>
    </header>
  );
}