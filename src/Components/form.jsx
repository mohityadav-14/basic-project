import React, { useState } from "react";

const Form = () => {
  const [name,setName]=useState("")
  const [error,setError]=useState("")
  function handleSubmit(e){
    e.preventDefault();
    if(name===""){
      setError("Enter Proper Name")
    }
   else{ setError("")
    setName("")

    alert(`Submitted Name:${name}`);

   }
    
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
      <h2>Form </h2>
        <input
          type="text"
          value={name}
          placeholder="Enter your name "
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button  type="submit">Submit</button><br>

        </br>
        {error && <p style={{color:"red"}}>{error}</p>}
      </form>
    </>
  );
};

export default Form;
