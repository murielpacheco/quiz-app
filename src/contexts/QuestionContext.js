import { createContext, useState, useEffect } from 'react';

export const QuestionContext = createContext(null);

export function QuestionProvider(props) {
  const [dataQuestions, setDataQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [game, setGame] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
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
        score,
        setScore,
        currentQuestion,
        setCurrentQuestion,
      }}
    >
      {props.children}
    </QuestionContext.Provider>
  );
}
