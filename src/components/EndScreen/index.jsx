import {useContext} from 'react'
import {QuestionContext} from '../../contexts/QuestionContext'

import './styles.css'
export function EndScreen() {

  const {setGame,setCurrentQuestion,setScore, score, dataQuestions} = useContext(QuestionContext)
  function restartGame() {
    setGame(true);
    setCurrentQuestion(0);
    setScore(0)
  }
  return (
    <div className="end-screen">
      <h1>{`Você concluiu o quiz! Sua pontuação foi de: ${score}/${dataQuestions.length}`}</h1>
        <button onClick={restartGame}className="play-again">Jogar novamente</button>
    </div>
  )
}