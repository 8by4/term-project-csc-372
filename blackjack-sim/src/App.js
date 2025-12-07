import './App.css';
import NavBar from './components/navbarComponent';

import card1 from './assets/6H.png';
import card2 from './assets/8S.png';

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <main className ="app-title">
        <img src={card1} alt="Card1" className='card'/>
        <h1 className ="title-text">Welcome to the Blackjack Simulator!</h1>
        <img src={card2} alt="Card2" className='card'/>
      </main>

      <div className="title-buttons">
        <button>Log In</button>
     
        <button>Sign Up</button>
      </div>

    </div>
  );
}

export default App;
