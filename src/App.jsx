import React from "react";
import { GlobalStyle } from "../src/Componentes/GlobalStyle";
import Header from "../src/Componentes/Header/Header";
import Main from "./Componentes/MainContent/BackgroundImage";
import ImgRedeSocial from "./Componentes/Footer/ImagensRedeSocial";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <ImgRedeSocial />
    </>
  );
}

export default App;
