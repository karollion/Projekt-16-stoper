import Container from './components/Container/Container';
import Timer from './components/Timer/Timer';
import Button from './components/Button/Button';
import './styles/global.scss';
import { useState, useEffect } from 'react';

const App = () => {

  const [time, setTime] = useState (0);
  const [timer, setTimer] = useState (null);

  const startTimer = () => {
    //console.log('start', time);
    if(timer == null){
      setTimer(setInterval(() => {
        setTime(time => time + 1);
      }, 1));
    }
  };

  const stopTimer = () => {
    //console.log('stop');
    clearInterval(timer);
    setTimer(null);
  };
  
  const resetTimer = () => {
    //console.log('reset');
    setTime(0);
  };
  
  useEffect(() => {
    return () => {
      if(timer) clearInterval(timer);
    };
  }, []);
  
  return (
    <Container>
      <Timer time={time}></Timer>
      <div className='center'>
        <Button onClick={e => startTimer()}>Start</Button>
        <Button onClick={e => stopTimer()}>Stop</Button>
        <Button onClick={e => resetTimer()}>Reset</Button>
      </div>
    </Container>
  );
}

export default App;
