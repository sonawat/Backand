import React from 'react'
import {NavLink} from 'react-router-dom'
const About = () => {
  return (
    <div>
      <h3>About Page </h3>
        <NavLink to="/about/Aniket"><button>Aniket</button></NavLink>
        <NavLink to="/about/Raj"><button>Raj</button></NavLink>
    </div>
  )
}

export default About
