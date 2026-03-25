import React from "react";
import styles from "./Footer.module.css";
import logoPlayFooter from "../../assets/img/logo-play-footer.jpg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className={`${styles.footerLogo} d-flex align-items-center  `}>
            <i className="fab fa-playstation  text-white"></i>

            <img src={logoPlayFooter} alt="logo playstation" />
          </div>

          <div className="">
            <ul className="d-flex gap-1 align-items-center ">
              <li>
                <a href="/">Accueil</a>
                {/* <i className="fas fa-chevron-left"></i> */}
              </li>
              <li>
                <a href="/jeux">Jeux</a>
                {/* <i className="fas fa-chevron-left"></i> */}
              </li>
              <li>
                <a href="/apropos">Final Fantasy VII Rebirth</a>
              </li>
            </ul>

            <hr />
          </div>

          <div className="footer-infos d-flex gap-4 ">
            <ul className="d-flex gap-1 flex-column  ">
              <h5>Infos</h5>
              <li>
                <a href="/">Accueil</a>
                {/* <i className="fas fa-chevron-left"></i> */}
              </li>
              <li>
                <a href="/jeux">Carrières</a>
                {/* <i className="fas fa-chevron-left"></i> */}
              </li>
              <li>
                <a href="/apropos">PlayStation Studios</a>
              </li>
              <li>
                <a href="/apropos">PlayStation Productions</a>
              </li>
              <li>
                <a href="/apropos">Entreprise</a>
              </li>
            </ul>
            {/* partie 2 */}
            <ul className="d-flex gap-1 flex-column  ">
              <h5>Produits</h5>
              <li>
                <a href="/">PS5</a>
                {/* <i className="fas fa-chevron-left"></i> */}
              </li>
              <li>
                <a href="/jeux">PS4</a>
                {/* <i className="fas fa-chevron-left"></i> */}
              </li>
              <li>
                <a href="/apropos">PS VR2</a>
              </li>
              <li>
                <a href="/apropos">PS Plus</a>
              </li>
              <li>
                <a href="/apropos">Accessoires</a>
              </li>
              <li>
                <a href="/apropos">Jeux</a>
              </li>
            </ul>
            {/* partie 3 */}
            <ul className="d-flex gap-1 flex-column  ">
              <h5>Valeurs</h5>
              <li>
                <a href="/">Environnement</a>
                {/* <i className="fas fa-chevron-left"></i> */}
              </li>
              <li>
                <a href="/jeux">Accessibilité</a>
                {/* <i className="fas fa-chevron-left"></i> */}
              </li>
              <li>
                <a href="/apropos">Confidentialité en ligne</a>
              </li>
            </ul>
            {/* partie 4 */}
            <ul className="d-flex gap-1 flex-column  ">
              <h5>Soutien</h5>
              <li>
                <a href="/">Page d'accueil de l'Assistance</a>
                {/* <i className="fas fa-chevron-left"></i> */}
              </li>
              <li>
                <a href="/jeux">Sécurité PlayStation</a>
                {/* <i className="fas fa-chevron-left"></i> */}
              </li>
              <li>
                <a href="/apropos">État du PSN</a>
              </li>
              <li>
                <a href="/apropos">Réparations PlayStation</a>
              </li>
              <li>
                <a href="/apropos">Réinitialiser le mot de passe</a>
              </li>
              <li>
                <a href="/apropos">Manuels</a>
              </li>
            </ul>
            {/* partie 5 */}
            <ul className="d-flex gap-1 flex-column  ">
              <h5>Ressources</h5>
              <li>
                <a href="/">Conditions générales du PSN</a>
                {/* <i className="fas fa-chevron-left"></i> */}
              </li>
              <li>
                <a href="/jeux">Conditions d'annulation du PS Store</a>
                {/* <i className="fas fa-chevron-left"></i> */}
              </li>
              <li>
                <a href="/apropos">Classifications par âge</a>
              </li>
              <li>
                <a href="/apropos">Avertissements relatifs à la santé</a>
              </li>
              <li>
                <a href="/apropos">Développeurs</a>
              </li>
            </ul>
            {/* partie 6 */}
            <ul className="d-flex gap-1 flex-column  ">
              <h5>Connexion</h5>
              <li className={styles.iconPlay}>
                <i className="fab fa-facebook "></i>
                <i className="fab fa-instagram text-sm"></i>
                <i className="fab fa-twitter text-sm"></i>
                <i className="fab fa-youtube text-sm"></i>
              </li>
              <li>
                <a href="/jeux">Application Android</a>
                {/* <i className="fas fa-chevron-left"></i> */}
              </li>
            </ul>
          </div>
          <hr />
          <div className={`${styles.footerLogo} d-flex align-items-center  `}>
            <i className="fab fa-playstation  text-white"></i>

            <img src={logoPlayFooter} alt="logo playstation" />
          </div>

          <p>
            © 2024 Sony Interactive Entertainment Europe Limited (SIEE) Tous les
            contenus, titres de jeux, noms commerciaux et/ou habillage
            commercial, marques déposées, illustrations et images associées sont
            des marques déposées et/ou la propriété en droit d'auteur de leurs
            propriétaires respectifs. Tous droits réservés.{" "}
            <span className=" text-decoration-underline ">
              Plus d'informations
            </span>
          </p>
          <hr />

          <div className="d-flex  justify-content-between ">
            <div className=" d-flex  align-items-center  gap-4">
              <i className="fas fa-globe"></i>
              <span>France</span>
            </div>

            <div className="d-flex  gap-4 p-4  ">
              <div>
                <a href="/">
                  Mentions <br /> Juridiques
                </a>
              </div>
              <div>
                <a href="/">
                  Politique de <br /> confidentialité
                </a>
              </div>
              <div>
                <a href="/">
                  conditions d'utilisation du <br /> site web
                </a>
              </div>
              <div>
                <a href="/">
                  Plan <br /> du site
                </a>
              </div>
              <div>
                <a href="/">
                  Conditions d'utilisation des <br /> logiciels
                </a>
              </div>
              <div>
                <a href="/">
                  Politique d'utilisation des <br /> cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
