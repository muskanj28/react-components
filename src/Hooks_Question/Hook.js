// import React, { useState } from 'react'
// // import'./index.css'

// const Hook = () => {
//     // let val="Muskan Jain";
//     // console.log(useState)
//     //    let myName="Muskan"
//     //     const changeName=()=>{
//     //       document.getElementById('h1').innerText="Ashu";

//     //     }
//     const [myName, setMyName] = useState('Muskan jain')
//     const changeName = () => {
//         let val=myName
//         if (val==='Muskan Jain') {
//             setMyName('Ashu')
//         }
//         else {
//             setMyName('Muskan Jain')
//         }


//     // }
//     return (
//         <div className='container-fluid' id="div">
//             <h1 id="h1">{myName}</h1>
//             <button id="btn" onClick={changeName}>Click me</button>
//         </div>
//     )
// }

// export default Hook

import React, { useState } from 'react'

const Hook = () => {
    const [myName,setmyName]=useState('Muskan')
  return (
    <div>
      <h1>{myName}</h1>
    </div>
  )
}

export default Hook
