import './styles.css'
import {useContext} from 'react';
import {QuestionContext} from '../../contexts/QuestionContext'
import { QuestionButtons } from '../QuestionButtons'

export function Question ()  {
  const {dataQuestions, currentQuestion} = useContext(QuestionContext)

  return (
    <div className="question">
        <span className="question-span" dangerouslySetInnerHTML={{__html: dataQuestions[currentQuestion].question}}></span>  
     <QuestionButtons/>

    </div>
  )
}