import './App.css';
import video from './assets/login.mp4';
import leagueIcon from './assets/league-icon.jpg';

function App() {
  return (
    <section className="main">
      <aside className="left-content">
        <div className="form-auth">
          <img src={leagueIcon} alt="League Of Legends icon" />
          <span>Fazer login</span>
          <section className="login">
            <input type="text" placeholder="NOME DE USUÁRIO" />
            <input type="password" placeholder="SENHA" />
          </section>
        </div>
      </aside>
      <section className="">
        <video autoPlay={true} loop={true} className="video-background">
          <source src={ video } type="video/mp4" />
        </video>
      </section>
    </section>
  );
}

export default App;
