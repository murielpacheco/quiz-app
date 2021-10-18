import React from 'react'
import './styles.css'
const endScreen = ( {setGame, game}) => {
  return (
    <div className="end-screen">
      <h1>Você concluiu o quiz! Sua pontuação foi de: 7/10</h1>
        <button onClick={() => setGame(true)}className="play-again">Jogar novamente</button>
    </div>
  )
}

export default endScreen
