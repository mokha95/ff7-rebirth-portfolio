import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ffperso from "../../assets/img/aerith-cloud.png";
import cloudvsSephiroth from "../../assets/img/9.jpg";
import Sephiroth from "../../assets/img/final-fantasy-vii-rebirth-screenshot-sephiroth-22jun23.webp";
import cloudTifa from "../../assets/img/tifa-cloud.avif";
import aerithCloud from "../../assets/img/aerith-cloud.webp";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <>
      <div className={styles.menu}>
        <Carousel>
          <Carousel.Item>
            {/* Contenu du premier élément du Carousel */}
            <img
              className={`d-block w-100 img-shadow ${styles.menu}`}
              src={ffperso}
              alt="1er slide"
              style={{ width: "600px", height: "600px" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            {/* Contenu du deuxième élément du Carousel */}
            <img
              className={`d-block w-100 img-shadow ${styles.menu}`}
              src={cloudvsSephiroth}
              alt="2eme slide"
              style={{ width: "600px", height: "600px" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            {/* Contenu du troisième élément du Carousel */}
            <img
              className={`d-block w-100 img-shadow ${styles.menu}`}
              src={Sephiroth}
              alt="3eme slide"
              style={{ width: "600px", height: "600px" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            {/* Contenu du quatrième élément du Carousel */}
            <img
              className={`d-block w-100 img-shadow ${styles.menu}`}
              src={cloudTifa}
              alt="4eme slide"
              style={{ width: "600px", height: "600px" }}
            />
          </Carousel.Item>
          {/* <Carousel.Item>
           
            <img
              className={`d-block w-100 img-shadow ${styles.menu}`}
              src={aerithCloud}
              alt="5eme slide"
              style={{ width: "600px", height: "600px" }}
            />
          </Carousel.Item> */}
        </Carousel>
      </div>
    </>
  );
};

export default Menu;
