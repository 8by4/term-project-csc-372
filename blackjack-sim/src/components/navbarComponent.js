import React from "react";
import '../css/navBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="navbar-title">Blackjack App</h1>
      </div>

      <div className="navbar-right">
        <button className="nav-button">Home</button>
        <button className="nav-button">Stats</button>
        <button className="nav-button">Play</button>
        <button className="nav-button">Login</button>
      </div>
    </nav>
  );
}

export default NavBar;