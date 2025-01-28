import React, { useState } from 'react'
import { add } from './app/counterSlice';
import axios from 'axios';
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
const Login = () => {
  const count = useSelector((state) => state.counter.data);
  const dispatch = useDispatch();
  const [name,setName] = useState('');  
  const [password,setPassword] = useState();
const [data,setData] = useState([]);

    const fetch = async()=>{
        const a = await axios.get("http://localhost:3000/api/user");
        setData(a.data)
    }
    useEffect(()=>{
        fetch();
    },[])

    const ani = (e)=>{
      e.preventDefault();
      // console.log(name,password);
    //   var ab = data.filter((item)=>item.name.toLowerCase().includes(name.toLocaleLowerCase()))
    // console.log(ab);
    
    data.forEach((item)=>{
        if(item.name.toLowerCase() == name.toLocaleLowerCase())
        {
          console.log(true);
            dispatch(add())
        }
    })
  }
    
  return (
    <div>
        <br /><br />
        <form onSubmit={ani}>
            <input type="text" value={name} onChange={(e)=>setName(e.currentTarget.value)}/>
            <input type="password" value={password} onChange={(e)=>setPassword(e.currentTarget.value)}/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
export default Login
