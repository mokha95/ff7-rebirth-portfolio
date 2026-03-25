import React, { useState, useEffect } from "react";
import img from "/src/assets/img/Sony.webp";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <div className={`container-fluid p-0 ${styles.hautPage}`}>
        <div className="sony-logo ">
          <img className="" src={img} alt="logo sony" />
        </div>
        <nav
          className={`m-0 d-flex flex-nowrap justify-content-between align-items-center p-3 mx-4 ${styles.navbarFixer} ${styles.fixedTop}`}
        >
          <div className="burger-menu-container"></div>
          <div className="play d-flex justify-content-center align-items-center flex-grow-1    ">
            <i
              className={`fs-2 me-3 fab fa-playstation ${styles.logoPlay}`}
            ></i>
            {/* visible sur les écrans de taille large (largeur d'écran supérieure ou égale à 992px) et masqué sur les écrans de taille plus petite que 992px.  */}
            <div className=" d-none d-lg-flex   ">
              <div
                className={`liens-games me-2 d-flex justify-content-center align-items-center  ${styles.link}`}
              >
                <a href="#" className="fw-bold">
                  Jeux
                </a>
                <span>
                  <i className="fa-solid fa-chevron-down text-secondary "></i>
                </span>
              </div>
              <div
                className={`liens-games me-2 d-flex justify-content-center align-items-center  ${styles.link}`}
              >
                <a href="#" className="fw-bold">
                  PS5
                </a>
                <span>
                  <i className="fa-solid fa-chevron-down p-1 text-secondary  text-secondary "></i>
                </span>
              </div>
              <div
                className={`liens-games me-2 d-flex justify-content-center align-items-center  ${styles.link}`}
              >
                <a href="#" className="fw-bold">
                  PS4
                </a>
                <span>
                  <i className="fa-solid fa-chevron-down p-1 text-secondary "></i>
                </span>
              </div>
              <div
                className={`liens-games me-2 d-flex justify-content-center align-items-center  ${styles.link}`}
              >
                <a href="#" className="fw-bold">
                  Services
                </a>
                <span>
                  <i className="fa-solid fa-chevron-down p-1 text-secondary "></i>
                </span>
              </div>
              <div
                className={`liens-games me-2 d-flex justify-content-center align-items-center  ${styles.link}`}
              >
                <a href="#" className="fw-bold">
                  Accessoires
                </a>
                <span>
                  <i className="fa-solid fa-chevron-down p-1 text-secondary "></i>
                </span>
              </div>
              <div
                className={`liens-games me-2 d-flex justify-content-center align-items-center  ${styles.link}`}
              >
                <a href="#" className="fw-bold">
                  Actualités
                </a>
                <span>
                  <i className="fa-solid fa-chevron-down p-1 text-secondary "></i>
                </span>
              </div>
              <div
                className={`liens-games me-2 d-flex justify-content-center align-items-center  ${styles.link}`}
              >
                <a href="#" className="fw-bold">
                  Boutique
                </a>
                <span>
                  <i className="fa-solid fa-chevron-down p-1 text-secondary "></i>
                </span>
              </div>
              <div
                className={`liens-games me-2 d-flex justify-content-center align-items-center  ${styles.link}`}
              >
                <a href="#" className="fw-bold">
                  Assistance
                </a>
                <span>
                  <i className="fa-solid fa-chevron-down p-1 text-secondary "></i>
                </span>
              </div>
            </div>
          </div>

          <div className="play-2 d-flex flex-nowrap   ">
            <button className={` border text-white   me-4 ${styles.btnNavbar}`}>
              Connexion
            </button>
            <i
              className={`fa-solid fa-magnifying-glass   ${styles.rechercheIcon} `}
            ></i>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
