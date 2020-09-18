import React from 'react';
import './App.css';
import Profile from './profile/Profile';

function App() {
  const imgStyle = {
    width: 300,
    height: 350,
    borderRadius: "15px 80px"
  }
  
  return (
    <>
    <Profile firstName = "Drake" bio="Drake , de son vrai nom Aubrey Drake Graham, est un rappeur-compositeur, chanteur et acteur canadien, né le 24 octobre 1986 à Toronto, au Canada. Longtemps affilié au label de Lil Wayne Young Money Entertainment, il y a signé officiellement en juin 2009. Son premier album studio, Thank Me Later, sort le 14 juin 2010. " profession="Singer">
      <div>
      <img src="/drake.jpg" alt="Tom Hardy Smiles" style={imgStyle}/>
      </div>
    </Profile>
    <Profile firstName = "Lionel Messi" bio="Lionel Andrés Messi Cuccittini is an Argentine professional footballer who plays as a forward and captains both Spanish club Barcelona and the Argentina national team." profession="Football Player">
    <div>
    <img src="/messi.jpg" alt="Lionel Messi with Argentina kit" style={imgStyle}/>
    </div>
  </Profile>
  </>
  );
}

export default App;
