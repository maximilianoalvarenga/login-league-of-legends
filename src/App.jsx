import './App.css';
import video from './assets/login.mp4';

function App() {
  return (
    <section className="main">
      <aside className="left-container">
        <div>
          <span>logo</span>
          <span>Fazer login</span>
          <input type="text" placeholder="NOME DE USUÁRIO" />
          <input type="password" placeholder="SENHA" />
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
