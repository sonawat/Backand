import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';

const Signup = () => {
  const[data,setData] = useState([]);
  const[name,setName] = useState('');
  const[password,setPassword] = useState('');

  const ani = async () => {
      const data = await axios.get("http://localhost:3000/api/user");
      setData(data.data);
  }
  useEffect(()=>{
    ani();
    },[])

    const aniket =()=>{
      axios.post("http://localhost:3000/api/user",{
        name:name,
        password:Number(password)
        })
        .then((res)=>{
          console.log(res.data);
          })
          .catch((err)=>{
            console.log(err);
            })
    }

    const del = async(a)=>{
     const res =  await axios.delete(`http://localhost:3000/api/user/${a}`)
     console.log(res.data);
    }

  return (
    <div>
      <h3>{data.length}</h3>
      <form action="" onSubmit={aniket}>
  <input type="text" value={name} onChange={(e)=>setName(e.target.value)} 
  placeholder="Enter your name"/>
  <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} 
  placeholder="Enter your password"/>
  <button type='submit'>Submit</button>
  </form>


  {data.map((item,i)=>(
    <p key={i}>Name : {item.name} Price : {item.price} <button onClick={()=>del(item._id)}>Delete</button></p>
  ))}
    </div>
  )
}
export default Signup
