import React from "react";
import { styled } from "styled-components";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="dice-img" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .content {
    h1 {
        font-size: 96px;
        white-space: nowrap;
    }
  }

`;

const Button = styled.button`
  padding: 10px 18px;
  border-radius: 5px;
  color: white;
  background: #000;
  min-width: 220px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid transparent;

  &:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.4s background ease-in;
  }
`;
