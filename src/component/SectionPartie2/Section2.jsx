import React from "react";
import styles from "./Section2.module.css";
import img3heros from "../../assets/img/3heros.webp";
import imgFFVII from "../../assets/img/FFVII-rebirth-background820x820.jpg";

const Section2 = () => {
  return (
    <>
      <section className={styles.ombreSection}>
        <div className="container d-flex flex-wrap pt-5">
          <div className="text-gauche col-lg-6 overlay">
            <h3 className="fw-bold fs-4">
              Qu&apos;est-ce que Final Fantasy VII Rebirth ?
            </h3>
            <h2 className="lh-sm">
              Découvrez un vaste monde plein de vie dans cette partie de la saga
              de Final Fantasy VII Remake.
            </h2>
          </div>
          <div className="text-droit col-lg-6 overlay">
            <p>
              Final Fantasy VII Rebirth est la seconde partie de la saga de
              Final Fantasy VII Remake, reprenant l&apos;histoire de ce RPG qui
              a redéfini le genre à travers trois jeux différents.
            </p>
            <p>
              Les héros emblématiques, Cloud, Barret, Tifa, Aerith et Red XIII
              se sont échappés de la ville dystopique de Midgar pour
              s&apos;élancer à la poursuite de Séphiroth, l&apos;épéiste vengeur
              que Cloud avait laissé pour mort.
            </p>

            <p>
              Tous les joueurs pourront découvrir cette nouvelle aventure, même
              ceux qui n&apos;ont pas encore joué à{" "}
              <span className="text-decoration-underline">
                Final Fantasy VII Remake
              </span>{" "}
              ou au jeu original de PlayStation. Attendez-vous à une narration
              cinématique inédite, des combats effrénés, et un vaste monde à
              explorer.‎
            </p>
          </div>
        </div>
      </section>

      {/*  SECTION EDITIONS */}
      <section
        className={`${styles.edition} d-flex flex-column  align-items-center  pt-5`}
      >
        <span className="text-center ">
          {" "}
          <i
            className={`fs-2 me-3 fab fa-playstation  ${styles.logoPlay2}`}
          ></i>
        </span>
        <h2 className="text-light fw-light lh-base pt-4">
          Achetez Final Fantasy VII Rebirth <br />
          <p className="text-center">sur le PlayStation Store</p>
        </h2>

        <h3 className="pt-4">Éditions</h3>

        <div className="container pt-4">
          <div className="row d-flex flex-wrap ">
            <div className="col-md-6 col-12 ">
              <div className="card text-white bg-dark mb-3">
                <img
                  src={img3heros}
                  className="card-img-top"
                  alt="Final Fantasy VII Rebirth DEMO"
                  style={{ objectFit: "cover", height: "250px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">FINAL FANTASY VII REBIRTH DEMO</h5>
                  <p className="card-text">Gratuit</p>
                  <p className="card-text">
                    <small className="text-muted">Démo</small>
                  </p>
                  <div className="d-flex align-items-center gap-2">
                    <div>
                      <button className="btnLike btn btn-lg btn-block btn-header w-100 btm-sm">
                        Ajouter a la bibliothèque
                      </button>
                    </div>
                    <div className="coeur">
                      <i className="fa-regular fa-heart  "></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="card text-white bg-dark mb-3">
                <img
                  src={imgFFVII}
                  className="card-img-top"
                  alt="Final Fantasy VII Rebirth DEMO"
                  style={{ objectFit: "cover", height: "250px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Standard Edition</h5>
                  <span className="card-text">
                    FINAL FANTASY VII <br />
                    REBIRTH
                  </span>
                  <p className="card-text">
                    <small className="text-muted">Démo</small>
                  </p>
                  <div className="d-flex align-items-center gap-2">
                    <div>
                      <button className="btnLike btn btn-lg btn-block btn-header w-100 btm-sm">
                        Ajouter a la bibliothèque
                      </button>
                    </div>
                    <div className="coeur">
                      <i className="fa-regular fa-heart  "></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="card text-white bg-dark mb-3">
                <img
                  src={img3heros}
                  className="card-img-top"
                  alt="Final Fantasy VII Rebirth DEMO"
                  style={{ objectFit: "cover", height: "250px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">FINAL FANTASY VII REBIRTH DEMO</h5>
                  <p className="card-text">Gratuit</p>
                  <p className="card-text">
                    <small className="text-muted">Démo</small>
                  </p>
                  <div className="d-flex align-items-center gap-2">
                    <div>
                      <button className="btnLike btn btn-lg btn-block btn-header w-100 btm-sm">
                        Ajouter a la bibliothèque
                      </button>
                    </div>
                    <div className="coeur">
                      <i className="fa-regular fa-heart  "></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="card text-white bg-dark mb-3">
                <img
                  src={imgFFVII}
                  className="card-img-top"
                  alt="Final Fantasy VII Rebirth DEMO"
                  style={{ objectFit: "cover", height: "250px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">FINAL FANTASY VII REBIRTH DEMO</h5>
                  <p className="card-text">Gratuit</p>
                  <p className="card-text">
                    <small className="text-muted">Démo</small>
                  </p>
                  <div className="d-flex align-items-center gap-2">
                    <div>
                      <button className="btnLike btn btn-lg btn-block btn-header w-100 btm-sm">
                        Ajouter a la bibliothèque
                      </button>
                    </div>
                    <div className="coeur">
                      <i className="fa-regular fa-heart  "></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="card text-white bg-dark mb-3">
                <img
                  src={img3heros}
                  className="card-img-top"
                  alt="Final Fantasy VII Rebirth DEMO"
                  style={{ objectFit: "cover", height: "250px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">FINAL FANTASY VII REBIRTH DEMO</h5>
                  <p className="card-text">Gratuit</p>
                  <p className="card-text">
                    <small className="text-muted">Démo</small>
                  </p>
                  <div className="d-flex align-items-center gap-2">
                    <div>
                      <button className="btnLike btn btn-lg btn-block btn-header w-100 btm-sm">
                        Ajouter a la bibliothèque
                      </button>
                    </div>
                    <div className="coeur">
                      <i className="fa-regular fa-heart  "></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;
