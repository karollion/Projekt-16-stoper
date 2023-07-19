import styles from './Timer.module.scss';

const Timer = ({time}) => {

  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  
  function convertMsToTime(milliseconds) {
    let milis = parseInt((milliseconds%1000)/100);
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
  
    seconds = seconds % 60;
    minutes = minutes % 60;
  
    return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(seconds,)}:${padTo2Digits(milis)}`;
  }

    return (<span className={styles.timer}>{convertMsToTime(time)}</span>);
};

export default Timer;