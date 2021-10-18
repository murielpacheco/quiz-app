import './styles.css'
import {useState} from 'react';
import QuestionButtons from '../QuestionButtons'

const Question = ({ dataQuestions, game, setGame}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1)
  }
  return (
    <div className="question">
        <span className="question-span" dangerouslySetInnerHTML={{__html: dataQuestions[currentQuestion].question}}></span>  
     <QuestionButtons dataQuestions={dataQuestions} handleNextQuestion={handleNextQuestion} currentQuestion={currentQuestion} game={game} setGame={setGame} />

    </div>
  )
}

export default Question
