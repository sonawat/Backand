import React from 'react'
import { useParams } from 'react-router-dom'
const Admi = () => {

  const {user} = useParams();
  return (
    <div>
      <h3>{user } User Page</h3>
    </div>
  )
}

export default Admi
