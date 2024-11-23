import React from "react";
import { Link } from "react-router-dom";

import InputSearch from "../../molecules/InputSearch";

export default function DrawerNavigator() {

  return (
    <div id="sidebar">
      <div className="inner">
        <InputSearch />
        <nav id="menu">
          <header className="major">
            <h2>Menu</h2>
          </header>
          <ul>
            <li><Link to="">Inicio</Link></li>
            <li><Link to="blog">Blog</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}