import React from 'react'
import './styles.css'
const QuestionButton = ({dataQuestions, handleNextQuestion, currentQuestion}) => {
  const incorrect_answers = dataQuestions[currentQuestion].incorrect_answers;
  const correct_answer = dataQuestions[currentQuestion].correct_answer;
  const randomQuestions = [correct_answer, ...incorrect_answers].sort(() => Math.random() -0.5);
  console.log(currentQuestion)
  return (
    <>
      <div className="question-buttons">
        <button className={correct_answer === randomQuestions[0] ? "correct" : '' } dangerouslySetInnerHTML={{__html: randomQuestions[0]}}/>
        <button className={correct_answer === randomQuestions[1] ? "correct" : '' } dangerouslySetInnerHTML={{__html: randomQuestions[1]}} />
        <button className={correct_answer === randomQuestions[2] ? "correct" : '' } dangerouslySetInnerHTML={{__html: randomQuestions[2]}}/>
        <button className={correct_answer === randomQuestions[3] ? "correct" : '' } dangerouslySetInnerHTML={{__html: randomQuestions[3]}} />
        {currentQuestion <= 8 ? (
          <span className="next-question" onClick={handleNextQuestion}>Next question</span>

        ) : ''}
        <span className="total-questions">{`${currentQuestion + 1}/${dataQuestions.length}`}</span>
    </div>

  </>
  )
}

export default QuestionButton
