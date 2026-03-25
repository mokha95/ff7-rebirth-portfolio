import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./component/Navbar/Navbar";
import Header from "./component/Header/Header";

import Menu from "./component/Menu/Menu";
import React from "react";
import Section2 from "./component/SectionPartie2/Section2";
import Section3 from "./component/SectionPartie3/Section3";
import Main from "./component/Main/Main";
import Footer from "./component/Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Menu />
      <Section2 />
      <Section3 />
      <Main />
      <Footer />
    </>
  );
}

export default App;
