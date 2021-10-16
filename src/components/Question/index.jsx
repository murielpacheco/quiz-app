import React from 'react'
import './styles.css'

import QuestionButtons from '../QuestionButtons'
const Question = ({ dataQuestions}) => {
  return (
    <div className="question">
        <span className="question-span" dangerouslySetInnerHTML={{__html: dataQuestions[0].question}}></span>  
     <QuestionButtons className="correct" dataQuestions={dataQuestions} />

     <span className="button-total">{`1/${dataQuestions.length}`}</span>

    </div>
  )
}

export default Question
