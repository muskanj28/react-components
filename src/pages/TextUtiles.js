import React, { useState } from 'react'

const TextUtiles = () => {

  const [randomtext,setrandomText]=useState('');
  const [changeText,setchangeText]=useState('')


  const handleTextChange = (event) => {
    setrandomText(event.target.value);
    
  };

  function changeUpperCase(){
    

    setchangeText(randomtext.toUpperCase()) 
    // console.log(randomtext);
  }

  function changeLowerCase(){

    setchangeText(randomtext.toLowerCase()) 
    // console.log(randomtext);
  }

  
  return (
    <div>
      <div className='row'>
        <div className='col-6'>
          <textarea className="form-control" rows="8" value={randomtext} onChange={handleTextChange}></textarea>
        </div>
        <div className='col-6'>
          <textarea className="form-control" rows="8" value={changeText}></textarea>
        </div>

        <div className='col-12 pt-4 '>
          <button className='btn btn-primary mx-2' onClick={changeUpperCase}>Upper Case</button>
          <button className='btn btn-primary mx-2' onClick={changeLowerCase}>Lower Case</button>
          <button className='btn btn-primary mx-2'>Upper Case</button>
          <button className='btn btn-primary mx-2'>Upper Case</button>
          <button className='btn btn-primary mx-2'>Upper Case</button>
        </div>
      </div>

    
  </div> 
  )
}

export default TextUtiles;
