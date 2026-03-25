import styles from "./BurgerMenu.module.css";
import { useState } from "react";
import React from "react";

export default function BurgerMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    console.log("btn");
  };
  // commentaire
  return (
    <>
      <button className={styles.burgerBtn} onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </button>
      <div className={`${styles.BurgerMenu} ${showMenu ? styles.visible : ""}`}>
        <ul>
          <li>
            <a href="#">Jeux</a>
          </li>
          <li>
            <a href="#">PS5</a>
          </li>
          <li>
            <a href="#">PS4</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Accessoires</a>
          </li>
          <li>
            <a href="#">Actualités</a>
          </li>
          <li>
            <a href="#">Boutique</a>
          </li>
          <li>
            <a href="#">Assistance</a>
          </li>
        </ul>
      </div>
    </>
  );
}
