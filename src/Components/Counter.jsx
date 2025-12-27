import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0)
 
     function Decrease(){
        if(count>0){
{setCount(count-1)}
        }
     } 

  return (
  
    <>
        <h1>Counter</h1>
        <p>{count}</p>
        <button onClick={()=>{setCount(count+1)}}>Increase</button>
        <button onClick={Decrease}>Decrease</button>
        <button onClick={()=>{setCount(0)}}>Reset</button>
    </>
  )
}

export default Counter