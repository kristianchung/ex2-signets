import React from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SortIcon from '@material-ui/icons/Sort';
import './Dossier.scss';
export default function Dossier({id, titre, couleur, dateModif}) {

  return (
    <article className="Dossier" style={{ backgroundColor: couleur }}> 
      <div className="couverture">
        <SortIcon style={{ position: 'absolute', backgroundColor: '#222222', borderRadius: 100, fontSize: 30, margin: 10, opacity: 0.5, padding: 5 }}>
          <span className="deplacer">Déplacer</span>
        </SortIcon>
        <img src={`images-dossiers/${id}.png`} alt={titre}/>
      </div>
      <div className="info">
        <h2>{titre}</h2>
        <p>Modifié: {dateModif}</p>
      </div>
      <MoreVertIcon style={{ marginLeft: 265, marginBottom: 10, marginTop: -20 }}><button>Modifier</button></MoreVertIcon>
    </article>
  );
}