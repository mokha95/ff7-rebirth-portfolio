import React from "react";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <>
      <main>
        <div className={styles.mainContainer}>
          <div className={`${styles.mainImageFond} container-fluid`}></div>
          <div className={`container ${styles.blocFF}`}>
            <div className="row d-flex justify-content-center  align-items-center ">
              <div className="col-md-6">
                <h5>Guides et éditoriaux</h5>
                <p className="fw-bold">
                  Dois-je avoir joué à Final Fantasy VII Remake avant de lancer
                  Final Fantasy VII Rebirth ?
                </p>

                <p>
                  Que vous découvriez seulement le jeu ou que vous soyez fan de
                  la première heure, la seconde partie du fascinant projet de
                  remake de Final Fantasy VII s'aventure en territoire inconnu.
                </p>

                <p>
                  Découvrez pourquoi Final Fantasy VII Rebirth est une
                  expérience indépendante qui peut être appréciée en tant que
                  telle pour découvrir l'emblématique série Final Fantasy VII.
                </p>

                <div>
                  <button className={styles.btnInfo}>Plus d'infos</button>
                </div>
              </div>
              <div className="col-md-6 pt-4">
                <img
                  src="src/assets/img/3heros.webp"
                  className="img-fluid"
                  style={{ maxWidth: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* partier ff7 */}

        <div className="container">
          <div className="row d-flex justify-content-center  align-items-center ">
            <div className="col-md-6">
              <img
                className={styles.logoFF7rebirth}
                src="src/assets/img/logo-ff7.webp"
                alt="logo ff7"
              />
              <h4 className="pt-4">
                Vous découvrez <p className="mt-1">Final Fantasy ?</p>
              </h4>

              <p className={styles.largeurParagraphe}>
                Lisez notre guide sur l'une des sagas RPG japonaises les plus
                anciennes et les plus populaires de tous les temps.
              </p>

              <div className="pt-3">
                <button className={styles.btnInfo2}>En savoir plus</button>
              </div>
            </div>
            <div className="col-md-6 pt-4">
              <img
                src="src/assets/img/fond-perso-ff7.webp"
                className="img-fluid "
                style={{ maxWidth: "100%" }}
              />
            </div>
          </div>
        </div>
        {/* partie remake */}
        <div className={`${styles.backgroundRemake} p-5  mt-5`}>
          <div className="container pt-4">
            <div className="row d-flex justify-content-center  align-items-center ">
              <div className="col-md-6">
                <p className={styles.textContainerRemake}>
                  Les meilleurs remakes modernes sur PS4 et PS5
                </p>

                <p className={styles.largeurParagraphe}>
                  Redécouvrez certains des jeux les plus illustres des
                  générations de consoles précédentes, d'expériences horrifiques
                  légendaires à de grands classiques des jeux de plateforme
                  cartoonesques, désormais reconçus avec la technologie
                  actuelle.
                </p>

                <div className="pt-3">
                  <button className={styles.btnInfo3}>
                    Découvrir des remakes modernes
                  </button>
                </div>
              </div>
              <div className="col-md-6 pt-4">
                <img
                  src="src/assets/img/lesRemakeJeux.webp"
                  className="img-fluid "
                  style={{ maxWidth: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* plateforme playstation */}

        <div className={`container-fluid pt-5 ${styles.plateformeSection}`}>
          <div
            className={`row d-flex  justify-content-center  ${styles.plateformesSony}`}
          >
            <div className="col-6 col-md-4">
              <p>Plateforme:</p>
              <p>Sortie:</p>
              <p>Éditeur:</p>
              <p>Genres:</p>
              <p>Voix:</p>
              <p>Langues à l'écran:</p>
            </div>

            <div className="col-6  col-md-4">
              <p>PS5</p>
              <p>29/2/2024</p>
              <p>Square Enix LTD</p>
              <p>RPG</p>
              <p>
                Allemand, Anglais,
                <br /> Français (France),
                <br /> Japonais
              </p>
              <p>
                Allemand, Anglais,
                <br />
                Espagnol, Espagnol
                <br />
                (Mexique), Français
                <br />
                (France), Italien,
                <br />
                Japonais, Portugais
                <br />
                Brésil
              </p>
            </div>

            <div className=" pt-4  col-md-4">
              <p>
                Le téléchargement de ce produit est soumis aux Conditions
                d'utilisation de PlayStation Network, ainsi qu'à toute autre
                condition spécifique à ce produit. Si vous n'acceptez pas ces
                conditions, ne téléchargez pas ce produit. Consultez les
                Conditions d'utilisation pour obtenir d'autres informations
                importantes.
              </p>

              <p>
                Vous pouvez télécharger ce contenu et y jouer sur la console PS5
                principale associée à votre compte (via le paramètre « Partage
                de console et jeu hors ligne ») et sur toutes les autres
                consoles PS5 si vous vous connectez avec ce même compte.
              </p>

              <p>
                Consultez les "Avertissements relatifs à la santé" avant
                d'utiliser ce produit pour y trouver des informations
                importantes.
              </p>

              <p>
                La licence de la bibliothèque de programmes ©Sony Interactive
                Entertainment Inc. est la propriété exclusive de Sony
                Interactive Entertainment Europe. Soumis aux conditions
                d’utilisation des logiciels. Pour consulter les droits
                d’utilisation complets, rendez-vous sur
                eu.playstation.com/legal.
              </p>
            </div>

            <div className={`${styles.txtBasFin} pt-5 pb-5`}>
              <p>
                FINAL FANTASY VII REBIRTH © SQUARE ENIX CO., LTD. Tous droits
                réservés. CONCEPTION DES PERSONNAGES : TETSUYA NOMURA /
              </p>{" "}
              <p className="text-center">ROBERTO FERRARI</p>
              <div className={`mt-5 ${styles.squareEnixTxt}`}>
                <p className="text-center">© SQUARE ENIX</p>
                <p>CHARACTER DESIGN: TETSUYA NOMURA / ROBERTO FERRARI</p>
                <p className="text-center">
                  LOGO ILLUSTRATION:© YOSHITAKA AMANO
                </p>
                <p className="text-center text-decoration-underline ">
                  Charte de confidentialité et CLUF du jeu
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
