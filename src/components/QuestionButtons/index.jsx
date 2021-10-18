import './styles.css'
const QuestionButton = ({dataQuestions, handleNextQuestion, currentQuestion, setGame}) => {
  const incorrect_answers = dataQuestions[currentQuestion].incorrect_answers;
  const correct_answer = dataQuestions[currentQuestion].correct_answer;
  const randomQuestions = [correct_answer, ...incorrect_answers].sort(() => Math.random() -0.5);

  // const [score, setScore] = useState(0)

  // const handleEndScreen = () => {
  //   setGame(false)
  // }

  // const handleCorrectAnswer = (event) => {
  //   const optionChosen = event.target.innerText;
  //   if(optionChosen === dataQuestions[currentQuestion].correct_answer) {
  //     setScore(score + 1)
  //     return 
  //   }

  //   if(currentQuestion === 9) handleEndScreen()
    
  // } onClick={handleCorrectAnswer}

  return (
    <>
      <div className="question-buttons">
        <button dangerouslySetInnerHTML={{__html: randomQuestions[0]}}/>
        <button dangerouslySetInnerHTML={{__html: randomQuestions[1]}} />
        <button dangerouslySetInnerHTML={{__html: randomQuestions[2]}}/>
        <button dangerouslySetInnerHTML={{__html: randomQuestions[3]}} />
        {currentQuestion <= 8 ? (
          <span className="next-question" onClick={handleNextQuestion}>Next question</span>

        ) : ''}
        <span className="total-questions">{`${currentQuestion + 1}/${dataQuestions.length}`}</span>
    </div>
  </>
  )
}

export default QuestionButton
