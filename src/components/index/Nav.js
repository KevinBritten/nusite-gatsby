import React from "react";

function Nav() {
  return (
    <nav>
      <a href="#home">
        <h2>nuSite</h2>
      </a>
      <div className="nav__link-container">
        <a href="#projects">Projects</a>
        <a href="#services">Services</a>
        <a href="#toolkit">Toolkit</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </div>
      <button className="nav__contact-button">Contact</button>
      <button className="nav__mobile-menu-button"></button>
    </nav>
  );
}

export default Nav;
