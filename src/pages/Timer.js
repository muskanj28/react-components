import React, { useEffect, useRef, useState } from 'react'

const Timer = () => {

  const [second, setSecond] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hour, setHour] = useState(0)
  const [toggle, setToggle] = useState(false);
  const intial = useRef(null);


  const start = () => {
    setToggle(true);
  }
  const stop = () =>{
    setToggle(false);
    clearInterval(intial.current);
  }
  const restart = () =>{
    setSecond(0);
    setMinutes(0);
    setHour(0);
    setToggle(true);
    clearInterval(intial.current);
  }


  useEffect(() => {
    if(toggle){
      setTimeout(() => {
        if(second === 10){
          setMinutes(minutes => minutes + 1);
          setSecond(1);
          if(minutes === 10){
            setHour(hour => hour + 1);
            setMinutes(1);
          }
        }else{
          setSecond(second => second + 1)
        }
      }, 1000);
    }

  },[second,minutes,toggle])



  return (
    <div className='timer-container'>
      <div className='row'>
        <div className='col-6 text-right'>
        Countdown Timer
        </div>
        <div className='col-6 text-left'>
          <button className='btn btn-success mx-3' onClick={start}>Start</button>
          <button className='btn btn-success mx-3' onClick={stop}>Stop</button>
          <button className='btn btn-success mx-3' onClick={restart}>Restart</button>
        </div>
        <div className='col-12'>
          <span className='timer'>Hour is : {hour}</span>
          <span className='timer'>Minutes : {minutes}</span>
          <span className='timer'>Second : {second}</span>
        </div>
      </div>
      
      
    </div>
  )
}

export default Timer;
