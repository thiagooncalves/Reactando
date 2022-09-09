import React from "react";
import styled from "styled-components";
import mainImage from "../../assets/frontend_webdeveloper-modified.jpg";

const MainImage = styled.img`
  width: 100vw;
  height: 90vh;
`;

const Main = () => {
  return (
    <div>
      <MainImage src={mainImage} alt="Logo principal" />
    </div>
  );
};

export default Main;
