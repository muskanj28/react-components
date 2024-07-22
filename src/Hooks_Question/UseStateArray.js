import React, { useState } from 'react'

const UseStateArray = () => {
 
  const bioData=[
    {id:0,myName:"Muskan",age:22},
    {id:1,myName:"Ashu",age:23},
    {id:2,myName:"Muskan",age:22}

  ]

  const [myArray,setmyArray]=useState(bioData)

  const clearAll=()=>{
     setmyArray([]);
  }

  // console.log(bioData);
  // bioData.map((data)=>(
  //  console.log(data)
  // ))
  

  return (
    <>
      
      {
        myArray.map((data)=>{
        return <h1 key={data.id}>Name:{data.myName},Age:{data.age}</h1>
        }
      )
      }
      <button className='btn-primary rounded' onClick={clearAll}>Click me</button>
    </>
  )
  
}

export default UseStateArray
