import React, { useState } from 'react'

const Project = () => {
    // let counter=15
    const [counter,setcounter]=useState(15)

    const addValue=()=>{
        setcounter(counter+1)
    }
  return (
    <>
      <h1>Muskan Jain</h1>
      <h2>Counter Value {counter}</h2>
      <button onClick={addValue}>Add Value</button><br></br><br></br>
      <button>Remove Value</button>
    </>
  )
}

export default Project
