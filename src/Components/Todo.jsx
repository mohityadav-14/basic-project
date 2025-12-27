import React, { useState } from 'react'

const Todo = () => {
    const [task,setTask]=useState("")
    const [taskList,setTaskList]=useState([])
     
 function handleSubmit(){
    if(task.trim()===""){
        return
    }
     setTaskList([...taskList,task]);
     setTask("");
 }
  return (
    
<>
    <h2>Todo</h2>
    <input 
     type='text' value={task} placeholder='Enter your Task' onChange={(e)=>{setTask(e.target.value)}}
    />
     <button onClick={handleSubmit}>Add</button>
     <ul>
        {
            taskList.map((num,index)=>(
        <li key={index}>{num}</li>
            ))
        }
     </ul>
    </>
  )
}

export default Todo