import React, { useState } from 'react';


const Todo = () => {
    const[todoList,setTodoList] = useState([]);
    const[todoText,setTodoText] = useState('');
       
   
  
    const addValue=(event)=>{
        if(todoText){
        setTodoList([...todoList,todoText]);}
        setTodoText('')
        event.preventDefault();

        
    }
    const changeTodoText=(event)=>{
        setTodoText(event.target.value)
    }
    
    return (
        
           <div className='row'>
                <div className='col-6'>
                    <div className='border heading p-3'>
                        <h5>My Todo List</h5>
                        <ul>
                            {
                                todoList.map((item,index)=>(
                                    <li key={index}>{item}</li>
                                ))
                            }

                        </ul>
                    </div>
                    <textarea className="form-control mt-4" value={todoText} onChange={changeTodoText} />
                    <button className='btn btn-primary rounded mt-4 w-100' onClick={addValue}>Add todo</button>
                </div>
            </div>
        
    )
}

export default Todo;
