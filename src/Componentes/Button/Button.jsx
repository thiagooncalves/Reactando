import styled from "styled-components";

const Button = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  color: black;
  border: 2px solid black;
  text-decoration: none;

  &:hover {
    background-color: black;
    color: white;
  }
`;

export default Button;
