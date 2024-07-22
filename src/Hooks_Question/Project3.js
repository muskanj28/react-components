import React, { useState } from 'react'

const Project3 = () => {

    const[text,setText]=useState('')

   const changeText=(event)=>{
    setText(event.target.value)
   }

   
  return (
    <div>
      <input type="text" onChange={changeText}></input>
      <div>{text}</div>
    </div>
  )
}

export default Project3
