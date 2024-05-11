import React, { useState } from 'react';
import style from './header.module.scss';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={style.headerContainer}>
      <div className={style.hamburguerContainer} onClick={toggleMenu}>
        <img className={style.hamburguericon} src='./icons/hamburguer.svg' alt="hamburguer" /> 
      </div>

      <div className={style.logoContainer}>
        <img className={style.logo} src='./imgs/luketheneko.png' alt="Logo 1" />
      </div>

      <nav className={`${style.navbar} ${isMenuOpen ? style.open : ''}`}>
        <ul id="menu" className={style.about}>
          <li>
            <a href="./">
              <img src="./icons/home.svg" className={style.iconHeader} alt="Home Icon" /> Home
            </a>
          </li>
          <li>
            <a href="./projetos">
              <img src="./icons/code.svg" className={style.iconHeader} alt="Projetos Icon" /> Projetos
            </a>
          </li>
          <li>
            <a href="https://github.com/LukeTheNeko/" target="_blank">
              <img src="./icons/github.svg" className={style.iconHeader} alt="Github Icon" /> Github
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
