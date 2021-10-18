import './styles/global.css';
import './styles/loadingAnimation.css';

import Question from '../src/components/Question';
import EndScreen from '../src/components/EndScreen'
import { useEffect, useState } from 'react';
function App() {
  
  // api related
  const API_URL =
    'https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple';

  const [dataQuestions, setDataQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  //main states
  const [game, setGame] = useState(false);


  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setDataQuestions(data.results);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className='loadingio-spinner-reload-sbn9sl2a8xp'>
        <div className='ldio-tn444wdgi4'>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );

  return (
    <div className='container'>
      {game ? (
        <Question
          dataQuestions={dataQuestions}
          setDataQuestions={setDataQuestions}
          game={game}
          setGame={setGame}
        />
        
      ) : (
        <EndScreen setGame={setGame} game={game}/>
      )}
    </div>
  );
}
export default App;
