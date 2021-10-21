import {useContext,useState} from 'react';
import {QuestionContext} from '../../contexts/QuestionContext'
import './styles.css'

export function QuestionButtons() {
  const {dataQuestions, currentQuestion, setCurrentQuestion, setScore, score, setGame} = useContext(QuestionContext)

  const [optionChosen, setOptionChosen] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const incorrectAnswers = dataQuestions[currentQuestion].incorrect_answers;
  const correctAnswer = dataQuestions[currentQuestion].correct_answer;
  const randomQuestions = [correctAnswer, ...incorrectAnswers].sort(
    () => Math.random() - 0.5
  );


  
  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
      <div className="question-buttons">
        <button className={isCorrect ? 'correct' : ''} dangerouslySetInnerHTML={{__html: randomQuestions[0]}}/>
        <button className={isCorrect ? 'correct' : ''} dangerouslySetInnerHTML={{__html: randomQuestions[1]}} />
        <button className={isCorrect ? 'correct' : ''} dangerouslySetInnerHTML={{__html: randomQuestions[2]}}/>
        <button className={isCorrect ? 'correct' : ''} dangerouslySetInnerHTML={{__html: randomQuestions[3]}} />
        {currentQuestion <= 8 ? (
          <span className="next-question" onClick={handleNextQuestion}>Next question</span>

        ) : ''}
        <span className="total-questions">{`${currentQuestion + 1}/${dataQuestions.length}`}</span>
        {/* <span className="total-questions">{score}</span> */}
    </div>
  )
}
