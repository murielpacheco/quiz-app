import React from 'react'
import './styles.css'
const QuestionButton = ({dataQuestions, className}) => {
  const incorrect_answers = dataQuestions[0].incorrect_answers;
  const correct_answer = dataQuestions[0].correct_answer;
  const randomQuestions = [correct_answer, ...incorrect_answers].sort(() => Math.random() -0.5);
  return (
    <div className="question-buttons">
      <button className={correct_answer === randomQuestions[0] ? "correct" : '' } dangerouslySetInnerHTML={{__html: randomQuestions[0]}}/>
      <button className={correct_answer === randomQuestions[1] ? "correct" : '' } dangerouslySetInnerHTML={{__html: randomQuestions[1]}} />
      <button className={correct_answer === randomQuestions[2] ? "correct" : '' } dangerouslySetInnerHTML={{__html: randomQuestions[2]}}/>
      <button className={correct_answer === randomQuestions[3] ? "correct" : '' } dangerouslySetInnerHTML={{__html: randomQuestions[3]}} />
  </div>
  )
}

export default QuestionButton
// onClick={() => handleAnswer({randomQuestions[0]})}
