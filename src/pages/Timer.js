import React, { useEffect, useState } from 'react'

const Timer = () => {

  const [second, setSecond] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hour, setHour] = useState(0)
  const [toggle, setToggle] = useState(false)

  // {setTimeout(()=>{setSecond(second+1)},1000)};



  const start = () => {
    setToggle(!toggle)
  }


  useEffect(() => {

    if(toggle)
    setInterval(() => {
      setSecond(second => second + 1)
    }, 1000);

    setInterval(() => {
      setMinutes(minutes => minutes + 1)
    }, 60000);

    setInterval(() => {
      setHour(hour => hour + 1)
    }, 360000);

  },[second,minutes,toggle])












  return (
    <div className='timer-container'>
      <h1>Countdown Timer<button className='btn btn-danger mx-3' onClick={start}>{toggle ? 'Start' : 'Stop'}</button></h1>
      <span className='timer'>Second : {second}</span>
      <span className='timer'>Minutes : {minutes}</span>
      <span className='timer'>Hour is : {hour}</span>


    </div>
  )
}

export default Timer;
