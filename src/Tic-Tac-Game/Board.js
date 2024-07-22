import React ,{useState}from 'react'
import Square from './Square'

const Board = () => {
  const [state,setState]=useState([''])

const changeValue=()=>{
  setState=('y')
}

  return (
    <div className='board-container'>
      {/* <div className='row'>
        <div className='col-4'>
          <Square onclick={changeValue} state="Mukan"/>
          <Square state="1"/>
          <Square state="1"/>
        </div>
      </div>
      <div className='row'>
        <div className='col-4'>
          <Square state="1"/>
          <Square state="1"/>
          <Square state="1"/>
        </div>
      </div>
      <div className='row'>
        <div className='col-4'>
          <Square state="1"/>
          <Square state="1"/>
          <Square state="1"/>
        </div>
      </div> */}
      <div className='row'>
        <div className='col-4'></div>
        <div className='col-4'>
          <div className='row Board'>
            <div className='col-4 border'>
              <Square state="1"/>
            </div>
            <div className='col-4 border'>
              <Square state="1"/>
            </div>
            <div className='col-4 border'>
              <Square state="1"/>
            </div>
            <div className='col-4 border'>
              <Square state="1"/>
            </div>
            <div className='col-4 border'>
              <Square state="1"/>
            </div>
            <div className='col-4 border'>
              <Square state="1"/>
            </div>
            <div className='col-4 border'>
              <Square state="1"/>
            </div>
            <div className='col-4 border'>
              <Square state="1"/>
            </div>
            <div className='col-4 border'>
              <Square state="1"/>
            </div>
          </div>
        </div>
        <div className='col-4'></div>
      </div>

      
      </div>
    
  )
}

export default Board
