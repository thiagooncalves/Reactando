import React from "react";
import styled from "styled-components";
import ImgWpp from "../../assets/wpp-icon.png";
import ImgInsta from "../../assets/instagram-icon.png";
import ImgFace from "../../assets/facebook-icon.png";

const ImgRede = styled.img`
  width: 40px;
  height: 40px;
`;

const ImgRedeSocial = () => {
  return (
    <div>
      <ImgRede src={ImgWpp} alt={"Imagem WhatsApp"} />
      <ImgRede src={ImgInsta} alt={"Imagem Instagram"} />
      <ImgRede src={ImgFace} alt={"Imagem Facebook"} />
    </div>
  );
};

export default ImgRedeSocial;
