import './styles/global.css';
import './styles/loadingAnimation.css';

import Question from '../src/components/Question';
import { useEffect, useState } from 'react';
function App() {
  
  // api related
  const API_URL =
    'https://opentdb.com/api.php?amount=10&category=23&difficulty=hard&type=multiple';

  const [dataQuestions, setDataQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  //main states
  const [game] = useState(true);
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
        />

      ) : (
        <h1>hello</h1>
        // <EndScreen/>
      )}
    </div>
  );
}
export default App;
