import React, { useState, useEffect } from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import './App.css';
import video from './assets/login.mp4';
import videoLoad from './assets/riotLoad.mp4';
import leagueIcon from './assets/league-icon.jpg';
import facebookLogin from './assets/facebook-icon.png';
import googleLogin from './assets/google-icon.png';
import appleLogin from './assets/apple-icon.png';

function App() {
  const [load, setLoad] = useState(false);
  const delay = 1;

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
          <img src={leagueIcon} alt="League Of Legends icon" className='icon-riot'/>
          <span className='header-login'>Fazer login</span>
          <section className="login">
            <div>
              <input type="text" placeholder="NOME DE USUÁRIO" />
              <input type="password" placeholder="SENHA" />
              <section className='social'>
                <div id='facebook'>
                  <img src={facebookLogin} alt="Facebook icon" className='icon-social'/>
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
            </div>
            <div className='box-btn-login'>
              <AiOutlineArrowRight className='btn-login' />
            </div>
          </section>
        </div>
        <section id='footer-right'>
            <div className='user-help'>
              <span>NÃO CONSEGUE INICIAR SESSÃO?</span>
              <span>CRIAR CONTA</span>
            </div>
            <div className='version-app'>
              <span>V0.0.1</span>
            </div>
          </section>
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
