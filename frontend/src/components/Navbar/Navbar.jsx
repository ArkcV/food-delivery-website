import React, { useState } from "react";
import "./Navbar.css";
import {
  MdOutlineDeliveryDining,
  MdSearch,
  MdShoppingBasket,
} from "react-icons/md";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <MdOutlineDeliveryDining className="navbar-logo-icon" />
        <span className="navbar-logo-title">Food Delivery</span>
      </div>
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          inicio
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </li>
        <li
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </li>
        <li
          onClick={() => setMenu("contact us")}
          className={menu === "contact us" ? "active" : ""}
        >
          contato-nos
        </li>
      </ul>
      <div className="navbar-right">
        <MdSearch className="navbar-search" />
        <div className="navbar-search-icon">
          <MdShoppingBasket className="navbar-shopbasket" />
          <div className="dot"></div>
        </div>
        <button>entrar</button>
      </div>
    </div>
  );
};

export default Navbar;
