import React, { useEffect, useState } from 'react'

const ApiFetch = () => {
    const [user,setUser]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error ,setError]=useState("");


     useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((response)=>{
 if(!response.ok){
    throw new Error("Somthing went wrong");

 }
 return response.json();

  })
  .then((data)=>{
    setUser(data);
    setLoading(false);

  })
  .catch((error)=>{
  setError(error.message);
  setLoading(false)
  })
     },[])
      if(loading){
        return<h3>Loading...</h3>;

      }
      if(error){
        return <h3>{error}</h3>
      }
  return (
 
    <>
        <h2>User List </h2>
        <ul>
            {
                user.map ((user)=>(
        <li key={user.id}>
            {user.name}-{user.email}
            
        </li>
                ))
            }
        </ul>
    </>
  )
}

export default ApiFetch