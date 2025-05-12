import React from "react";
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Peça aqui suas comidas favoritas</h2>
        <p>
         Escolha entre um menu diversificado com uma deliciosa variedade de pratos elaborados com os melhores ingredientes e experiência culinária. Nossa missão é satisfazer seus desejos e elevar sua experiência gastronômica, uma refeição deliciosa de cada vez.
        </p>
         <button>Ver Menu</button>
      </div>
    </div>
  );
};

export default Header;
