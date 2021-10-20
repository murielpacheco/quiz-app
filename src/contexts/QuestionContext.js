import { createContext, useState, useEffect } from 'react';

export const QuestionContext = createContext(null);

export function QuestionProvider(props) {
  const [dataQuestions, setDataQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [game, setGame] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [optionChosen, setOptionChosen] = useState('');

  const API_URL =
    'https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple';
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setDataQuestions(data.results);
        setLoading(false);
      });
  }, []);

  const handleEndScreen = () => {
    setGame(false);
  };
  const handleCorrectAnswer = (event) => {
    setOptionChosen(event.target.innerText);
    if (optionChosen === dataQuestions[currentQuestion].correct_answer && currentQuestion === 9) {
      setScore(score + 1);
      console.log('alo')
    }
    handleEndScreen();
  };
  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    if (optionChosen === dataQuestions[currentQuestion].correct_answer) {
      setScore(score + 1);
    }
  };

  return (
    <QuestionContext.Provider
      value={{
        API_URL,
        dataQuestions,
        setDataQuestions,
        loading,
        setLoading,
        game,
        setGame,
        handleNextQuestion,
        score,
        setScore,
        currentQuestion,
        setCurrentQuestion,
        isCorrect,
        setIsCorrect,
        handleCorrectAnswer,
      }}
    >
      {props.children}
    </QuestionContext.Provider>
  );
}
