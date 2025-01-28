import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Bussiness = () => {
  return (
    <div>
        <h1>This is Business page</h1>
        <NavLink to="/business/other">Other</NavLink>
        <NavLink to="/business/company">Compnay</NavLink>
        <Outlet />
    </div>
  )
}

export default Bussiness
