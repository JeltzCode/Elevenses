import { useState, useEffect } from 'react'
import Board from './components/Board'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

export default function App() {
  const [dice, setDice] = useState(allNewDice())
  const [elevenses, setElevenses] = useState(false)
  const btnText = elevenses ? 'Reset' : 'Roll'
  
  function getNewDie() {
    return {
      value: Math.ceil(Math.random()*6),
      isHeld: false,
      id: nanoid()
    }
  }
  
  function allNewDice() {
    const newDice = []
    for (let i=0;i<11;i++) {
      newDice.push(getNewDie())
    }
    return newDice
  }
  
  const holdDice = (id) => {
    setDice(prevDice =>
      prevDice.map(current => 
      current.id === id ?
      {...current, isHeld: !current.isHeld} :
      current
    )
  )
}

  function rollDice() {
    if (!elevenses) {
      setDice(prevDice => prevDice.map(current => 
        current.isHeld ? 
        current :
        getNewDie()
      ))
    } else {
      setElevenses(false)
      setDice(allNewDice())
    }
  }
  

  useEffect(() => {
    if (
      dice.every(die => die.isHeld)
      &&
      dice.every(die => die.value === dice[0].value)
    ) {setElevenses(true)}
  }, [dice])

    return (
      <div className='board'>
        {elevenses && <Confetti />}
        <h1 className="title">Elevenses</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        
        <Board dice={dice} holdDice={holdDice} />

        <button className='roll-btn' onClick={rollDice}>{btnText}</button>
      </div>
  )
}