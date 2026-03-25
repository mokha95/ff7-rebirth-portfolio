import styles from "./Header.module.css";
import img16 from "../../assets/img/16.webp";
import imgViolence from "../../assets/img/violence.png";
function Header() {
  return (
    <>
      <section className={`d-flex  pt-5 mt-2   row ${styles.imgFondFF}`}>
        <div className="col-lg-6 col-md-12">
          <h1 className="mt-3">Final Fantasy VII Rebirth</h1>
          <div className="squareEnix">
            <p className="fw-bold">Square Enix</p>
            <p>
              disponible sur{" "}
              <span className="border border-2 p-1 text-uppercase ">ps5</span>{" "}
            </p>
            <div className="notations d-flex align-items-center  gap-2">
              <span className="fw-bold">4.84</span>{" "}
              <div className={`${styles.etoile} d-flex gap-2`}>
                <span>
                  <i className="fas fa-star"></i>
                </span>
                <span>
                  <i className="fas fa-star"></i>
                </span>
                <span>
                  <i className="fas fa-star"></i>
                </span>
                <span>
                  <i className="fas fa-star"></i>
                </span>
                <span>
                  <i className="fas fa-star"></i>
                </span>
              </div>
              <div className="nb-notes">
                {" "}
                <span className="fw-bold"> 16.2k</span>
              </div>
            </div>
            <p className="mt-4">
              {" "}
              <span className=" fs-2 ">€79,99</span>{" "}
            </p>
          </div>

          <div className=" d-flex flex-wrap  gap-3 align-items-center ">
            <div className="Precommander">
              <button className="btn btn-lg btn-block btn-header w-100 btm-sm">
                Ajouter au panier
              </button>
            </div>
            <div className="coeur">
              <i className="fa-regular fa-heart  "></i>
            </div>
          </div>

          <div className="DateSortie mt-4">
            <p>Sorti 29/02/2024</p>

            <div className="d-flex gap-2">
              <span className="mr-3">
                <i className="fas fa-globe"></i>
              </span>
              <p>
                Jeu hors ligne activé
                {/* <i className="fa-regular fa-gamepad-modern"></i> */}
                <i className="fa-thin fa-gamepad-modern"></i>
                {/* <i className="fa-thin fa-dice-d12"></i> */}
              </p>
            </div>
            <p>1 joueur</p>
            <p>Lecture à distance prise en charge</p>
            <div className="version">
              <p>Version PS5</p>
              <p>
                Fonction de vibration et effet gâchette pris en charge (manette
                sans fil DualSense)
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-none d-lg-flex flex-column justify-content-end   ">
          <div className="pegi d-flex justify-content-end    gap-2 ">
            <div className="pegi16">
              <img
                className={styles.imgVignette}
                src={img16}
                alt="pegi 16"
              />
            </div>
            <div className="violences">
              <img
                className={styles.imgVignette}
                src={imgViolence}
                alt="image de point contre la violences"
              />
              <hr className="" />
              <p>Violence</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
