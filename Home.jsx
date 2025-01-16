import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
const Home = () => {
  const[data,setData] = useState([]);
  const[name,setName] = useState('');
  const[email,setemail] = useState('');
  const[password,setPassword] = useState('');
  const[mobile,setMobile] = useState('');
  const ani = async()=>{
      const a = await axios.get('http://localhost:3000/user');
      setData(a.data);

  }
  useEffect(()=>{
    ani();
  })

  const del = async(p)=>{
    const b = await axios.delete(`http://localhost:3000/user/${p}`);
    console.log(b.data);
      ani();
  }

  const insert =async(e)=>{
    e.preventDefault();
    const ob = {
      name  : name,
      email : email,
      password  : Number(password),
      mobile  :Number(mobile),
     }
    const c = await axios.post(`http://localhost:3000/user`,ob);
    console.log(c.data);
  }
  return (
    <div>
      <h3>{data.length}</h3>
      <h2>This is Home Page</h2>


      <form onSubmit={insert}>
        <input onChange={(e)=>setName(e.currentTarget.value)} type="text" placeholder='Enter Your Name ' /><br /><br />
        <input onChange={(e)=>setemail(e.currentTarget.value)} type="email" placeholder='Enter Your Email' /><br /><br />
        <input onChange={(e)=>setPassword(e.currentTarget.value)} type="password" placeholder='Enter Your Password' /><br /><br />
        <input onChange={(e)=>setMobile(e.currentTarget.value)} type="text" placeholder='Enter Your Mobile' /><br /><br />
        <input type="submit" /><br /><br />
      </form>


    <table bgcolor='silver' border={1} cellspacing="0px" cellpadding="10px"> 
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Password</th>
        <th>Mobile</th>
        <th>Delete</th>
      </tr>

    {
      data.map((item,index)=>(
        <tr key={item.id}>
          <td>{index+1}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.password}</td>
          <td>{item.mobile}</td>
          <td>
            <button onClick={()=>del(item._id)}>Delete</button>
          </td>
          <td>
            <NavLink to={`/update/${item._id}`}><button>Update</button></NavLink>
          </td>
        </tr>
      ))
    }
      </table>      
    </div>
  )
}

export default Home
