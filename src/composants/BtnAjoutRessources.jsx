import React from 'react';
import './BtnAjoutRessources.scss';
import FabIcon from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
export default function BtnAjoutRessources() {
  return (
    <FabIcon color="default" aria-label="add" style={{ position: 'absolute', bottom: 0, right: 0, margin: 30, backgroundColor: 'gray'}}>
      <AddIcon >
        <button className="BtnAjoutRessource">Ajouter</button>
      </AddIcon> 
    </FabIcon> 
  ); 
}