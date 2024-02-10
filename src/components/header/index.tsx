import React from 'react';
import style from './header.module.scss';

export function Header() {
  return (
    <div className={style.headerContainer}>
      <nav className={style.navbar}>
        <ul id="menu" className={style.about}>
          <li>
            <a href="./">
              <img src="/icons/home.svg" className={style.iconHeader} alt="Home Icon" /> Home
            </a>
          </li>
          <li>
            <a href="./projetos">
              <img src="/icons/code.svg" className={style.iconHeader} alt="Projetos Icon" /> Projetos
            </a>
          </li>
          <li>
            <a href="https://github.com/LukeTheNeko/" target="_blank">
              <img src="/icons/github.svg" className={style.iconHeader} alt="Github Icon" /> Github
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}