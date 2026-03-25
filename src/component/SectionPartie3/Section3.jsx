import React from "react";
import styles from "./Section3.module.css";
import { Carousel, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import img3heros from "../../assets/img/3heros.webp";
import imgCloud from "../../assets/img/slider-img/cloud-image-block-01-en-14feb24.webp";
import imgAerith from "../../assets/img/slider-img/Aerith-image-block-01-en-14feb24.webp";
import imgTifa from "../../assets/img/slider-img/tifa-image-block-01-en-14feb24.webp";
import imgRedXIII from "../../assets/img/slider-img/redXIII-image-block-01-en-14feb24.webp";
import imgSephiroth from "../../assets/img/slider-img/sephiroth-image-block-01-en-14feb24.webp";
import imgBarret from "../../assets/img/slider-img/Barret-image-block-01-en-14feb24.webp";
import imgVincent from "../../assets/img/slider-img/vincent-image-block-01-en-14feb24.webp";
import imgCid from "../../assets/img/slider-img/Cid-image-block-01-en-14feb24.webp";
import imgYuffie from "../../assets/img/slider-img/yuffie-image-block-01-en-14feb24.webp";
import imgCloudMain from "../../assets/img/final-fantasy-vii-rebirth-screenshot-cloud--22jun23.webp";
import imgAerithCombat from "../../assets/img/aerith-combat.webp";
const Section3 = () => {
  return (
    <>
      <section className={styles.spaceSection}>
        <div className={styles.extend}>
          <div className={styles.imgExtensions}>
            <h2 className="text-center pt-5">Extensions </h2>
            <img className="mt-5" src={img3heros} />
            {/* <span className={`d-inline border border-white  ${styles.ps5carte}`}>
            PS5
          </span> */}
            <span className="d-block">PACK D&apos;EXTENSIONS</span>
            <p>Mise à niveau vers FINAL FANTASY VII REBIRTH Édition</p>
            <p>Non disponible</p>
          </div>
        </div>
        {/*  */}

        <div className={styles.carteff7}>
          <h2 className="text-center pt-5">
            Caractéristiques principales de Final Fantasy VII Rebirth
          </h2>

          <div className="container">
            <div className="row pt-5">
              <div className="col-md-6">
                <img
                  src={imgCloudMain}
                  className="img-fluid max-width-600  rounded-4"
                  alt="Screenshot Cloud"
                />
                <h4 className="text-light text-center pt-4 fs-5">
                  Une aventure inoubliable
                </h4>
                <p className={styles.txtCarteCombat}>
                  Explorez un monde immense qui prend vie avec des graphiques
                  réalistes de qualité supérieure,{" "}
                  <span className="">
                    développé pour profiter de toute la puissance de la console
                    PS5.
                  </span>
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src={imgAerithCombat}
                  className="img-fluid max-width-600 rounded-4"
                  alt="Aerith Combat"
                />
                <h4 className="text-light text-center pt-4 fs-5">
                  Plongez dans une histoire envoûtante
                </h4>
                <p className={styles.txtCarteCombat}>
                  Suivez le périple de chaque personnage et renforcez les liens
                  qu&apos;ils partagent pour faire équipe{" "}
                  <span className=""> et affronter des ennemis puissants.</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* slider */}
        <div className="slider mt-5">
          <h1 className="text-center">
            Qui sont les personnages de Final Fantasy VII Rebirth ?
          </h1>

          <p className={`text-center pt-3 texteCouleur ${styles.texteCouleur}`}>
            Cloud Strife et ses amis s'aventurent au-delà de Midgar, à la
            poursuite de Séphiroth, le héros déchu. Le sort de la planète repose
            sur leur périple.
          </p>

          <div className="slider-img pt-5">
            <Carousel>
              <Carousel.Item>
                <div className="text-center position-relative">
                  <img
                    className="d-block w-50 mx-auto"
                    src={imgCloud}
                    alt="Cloud Strife"
                  />
                  <Carousel.Caption>
                    <h3>Cloud Strife</h3>
                    {/* <p className="p-3">
                      Cloud Strife est le protagoniste principal de Final
                      Fantasy VII et Final Fantasy VII Remake. Ancien membre de
                      SOLDAT, il est maintenant un mercenaire qui aide le groupe
                      AVALANCHE dans sa lutte contre la Shinra Electric Power
                      Company.
                    </p> */}
                  </Carousel.Caption>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-50 mx-auto"
                  src={imgAerith}
                  alt="Aerith Gainsborough"
                />
                <Carousel.Caption>
                  <h3>Aerith Gainsborough</h3>
                  {/* <p>
                    Aerith Gainsborough, également connue sous le nom d'Aeris
                    dans la version originale, est un personnage jouable dans
                    Final Fantasy VII et l'un des protagonistes principaux du
                    jeu. Elle est une jeune femme mystérieuse, douce et
                    attentionnée, avec un fort lien spirituel avec la planète.
                  </p> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-50 mx-auto"
                  src={imgTifa}
                  alt="Tifa Lockhart"
                />
                <Carousel.Caption>
                  <h3>Tifa Lockhart</h3>
                  {/* <p>
                    Tifa Lockhart est un personnage jouable dans Final Fantasy
                    VII et Final Fantasy VII Remake. Elle est membre d'AVALANCHE
                    et amie d'enfance de Cloud Strife. Tifa est une combattante
                    experte et possède une grande force physique.
                  </p> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-50 mx-auto"
                  src={imgRedXIII}
                  alt="Red XIII"
                />
                <Carousel.Caption>
                  <h3>Red XIII</h3>
                  {/* <p>
                    Red XIII, de son vrai nom Nanaki, est un personnage jouable
                    dans Final Fantasy VII et Final Fantasy VII Remake. C'est un
                    lion à l'apparence humanoïde, qui possède une grande sagesse
                    et une longue espérance de vie.
                  </p> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-50 mx-auto"
                  src={imgSephiroth}
                  alt="Sephiroth"
                />
                <Carousel.Caption>
                  <h3>Sephiroth</h3>
                  {/* <p>
                    Sephiroth est l'antagoniste principal de Final Fantasy VII.
                    Il est un ancien membre de SOLDAT, une unité d'élite de la
                    Shinra Electric Power Company. Sephiroth possède une force
                    et une intelligence extraordinaires, ainsi qu'un désir de
                    vengeance contre l'humanité.
                  </p> */}
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-50 mx-auto"
                  src={imgBarret}
                  alt="Barret"
                />
                <Carousel.Caption>
                  <h3>Barret</h3>
                  {/* <p>
                    Barret est un personnage jouable dans Final Fantasy VII et
                    Final Fantasy VII Remake. Il est le chef d'AVALANCHE et a un
                    bras gauche remplaçable par une arme à feu.
                  </p> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-50 mx-auto"
                  src={imgVincent}
                  alt="Vincent Valentine"
                />
                <Carousel.Caption>
                  <h3>Vincent Valentine</h3>
                  {/* <p>
                    Vincent Valentine est un personnage optionnel dans Final
                    Fantasy VII. Il est sombre, mystérieux et possède une
                    histoire complexe liée à la Shinra Electric Power Company et
                    à Sephiroth.
                  </p> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-50 mx-auto"
                  src={imgCid}
                  alt="Cid Highwind"
                />
                <Carousel.Caption>
                  <h3>Cid Highwind</h3>
                  {/* <p>
                    Cid Highwind est un pilote et ingénieur dans Final Fantasy
                    VII. Il rêve de devenir le premier homme à voyager dans
                    l'espace, mais son rêve est interrompu par ses obligations
                    envers AVALANCHE et la menace de la Shinra.
                  </p> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-50 mx-auto"
                  src={imgYuffie}
                  alt="Yuffie Kisaragi"
                />
                <Carousel.Caption>
                  <h3>Yuffie Kisaragi</h3>
                  {/* <p>
                    Yuffie Kisaragi est une ninja et voleuse qui apparaît comme
                    personnage optionnel dans Final Fantasy VII. Elle est
                    originaire de Wutai et cherche souvent à voler les trésors
                    des autres pour renforcer sa ville et affirmer son
                    indépendance contre la domination de la Shinra Electric
                    Power Company. Bien qu'elle commence comme une adversaire,
                    elle finit par se joindre à l'équipe de Cloud et devient une
                    alliée précieuse.
                  </p> */}
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section3;
