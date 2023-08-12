import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import { styled } from 'styled-components'
import RoleDice from './RoleDice'
import { Button, OutlineButton } from '../styled/Button'

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [currentDice, setCurrentDice] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState();
  const [error, setError] =  useState("");


  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  
  const roleDice = () => {
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (!selectedNumber){
      setError("You have not selected any number");
      return;
    }  

    if(selectedNumber === randomNumber){
      setScore((prev) => prev + randomNumber)
    }else{
      setScore((prev) => prev - 2)
    }
  }

  const resetScore = () => {
    setScore(0);
  }

  return (
    <MainContainer>
      <div className='top_section'>
        <TotalScore score={score} />
        <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className='btns'>
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button>Show Rules</Button>
      </div>
    </MainContainer>
  )
}

export default GamePlay


const MainContainer = styled.main`
  padding-top: 70px;
  .top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;
  }

  .btns{
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
  }
  
`;

