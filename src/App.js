import './styles/global.css';
import './styles/loadingAnimation.css';

import {Question} from '../src/components/Question';
import {EndScreen} from '../src/components/EndScreen'
import { useContext } from 'react';
import {QuestionContext} from './contexts/QuestionContext'
function App() {
  const {loading, game} = useContext(QuestionContext)
  //main states

  
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
        <Question/>
      ) : (
        <EndScreen/>
      )}
    </div>
  );
}
export default App;
