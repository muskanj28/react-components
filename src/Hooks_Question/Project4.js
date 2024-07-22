// // Use Effect and Use state
// import React, { useState, useCallback } from 'react'

// const Project4 = () => {

//     const [range, setRange] = useState(8)
//     const [number, setNumber] = useState(false)
//     const [character, setCharacter] = useState(false)
//     const [password, setPassword] = ("")

//     const passwordgenerator = useCallback(() => {
//         let pass = ""
//         let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
//         if (number) string += "0123456789";
//         if (character) character += "!@#$%&(){}"
//         for (let i = 1; i <= range; i++) {
//             let char = Math.floor(Math.random() * string.length + 1)
//         }

//         pass = str.charAT(char)

//         setPassword(pass)


//     //  [range, number, character, setPassword])

// }}

// const slide = () => {

//     setRange(range + 1)
//     // console.log(range+1)
// }
// return (
//     <div className='row'>
//         <div className='input-group col-4' >
//             <input type="text" className="form-control" value={password} />
//             <button className="btn btn-primary" type="button">copy</button>
//         </div>
//         <div className='my-3'>
//             <label for="customRange1" className="form-label"></label>
//             <input type="range" id="customRange1" min={6} max={100} value={slide} className='cursor-pointer' onChange={(e) => setRange(e.target.value)} />
//             <label>Length {range}</label>
//         </div>
//     </div>
// )
// }

// export default Project4
