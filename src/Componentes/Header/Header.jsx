import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo-header.png";
import Button from "../../Componentes/Button/Button";

const StyledHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 15vh;
  align-items: center;
  background-color: #e4e3e3;
`;

const Logo = styled.img`
  height: 75px;
  width: 75px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo src={logo} alt="Logo React" />
      <div>
        <Button primary href="https://google.com">
          Ajuda
        </Button>
        <Button href="https://google.com">Sair</Button>
      </div>
    </StyledHeader>
  );
};

export default Header;
