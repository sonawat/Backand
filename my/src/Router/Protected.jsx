import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
const Protected = (props) => {

  const nev = useNavigate()
  const count = useSelector((state) => state.counter.data);
    const A = props.val;
    useEffect(()=>
  {
    if(count != true)
      {
        nev('/login')
      }
  },[])

      
  return (
    <div>
        <A />
        {/* <h3>This is Protected Page</h3> */}
    </div>
  )
}

export default Protected
