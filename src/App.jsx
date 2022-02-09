import React, { useState, useEffect } from 'react';
import './App.css';
import video from './assets/login.mp4';
import videoLoad from './assets/riotLoad.mp4';
import leagueIcon from './assets/league-icon.jpg';
import facebookLogin from './assets/facebook-icon.png';
import googleLogin from './assets/google-icon.png';
import appleLogin from './assets/apple-icon.png';

function App() {
  const [load, setLoad] = useState(false);
  const delay = 11;

  useEffect(() => {
    let timer = setTimeout(() => setLoad(true), delay * 1000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    load ? (
    <section className="main">
      <aside className="left-content">
        <div className="form-auth">
          <img src={leagueIcon} alt="League Of Legends icon" />
          <span>Fazer login</span>
          <section className="login">
            <input type="text" placeholder="NOME DE USUÁRIO" />
            <input type="password" placeholder="SENHA" />
            <section className='social'>
              <div id='facebook'>
                <img src={facebookLogin} alt="Facebook icon" />
              </div>
              <div id='google'>
                <img src={googleLogin} alt="Google icon" />
              </div>
              <div id='apple'>
                <img src={appleLogin} alt="Apple icon" />
              </div>
            </section>
            <label class="container">Manter login
              <input type="checkbox" />
              <span class="mark"></span>
            </label>
          </section>
        </div>
      </aside>
      <section className="">
        <video autoPlay={true} loop={true} className="video-background" muted={true}>
          <source src={ video } type="video/mp4" />
        </video>
      </section>
    </section> ) : (
        <video autoPlay={true} loop={true} className="video-background" muted={true}>
          <source src={ videoLoad } type="video/mp4" />
        </video>
        )
  );
}

export default App;
