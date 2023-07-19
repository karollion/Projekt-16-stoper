import Container from './components/Container/Container';
import Timer from './components/Timer/Timer';
import Button from './components/Button/Button';
import './styles/global.scss';
import { useState } from 'react';

const App = () => {

  const [timer, setTimer] = useState ([
    {
      currentTime: 1700,
      interval: null,
    }
  ]);

  const startTimer = () => {
    console.log('start');
    setTimer(setInterval(() => {
      setTime(time + 1);
    }, 1))
  };

  const stopTimer = () => {
    console.log('stop');
  };

  const resetTimer = () => {
    console.log('reset');
  };

  // useEffect(() => {
  //   return () => {
  //      if(timer) clearInterval(timer);
  //   };
  // }, []);
console.log('timer', timer[0].currentTime);
  return (
    <Container>
      <Timer time={timer[0].currentTime}></Timer>
      <div className='center'>
        <Button onClick={e => startTimer()}>Start</Button>
        <Button onClick={e => stopTimer()}>Stop</Button>
        <Button onClick={e => resetTimer()}>Reset</Button>
      </div>
    </Container>
  );
}

export default App;
