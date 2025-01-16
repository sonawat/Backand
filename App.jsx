import React from 'react'
import {BrowserRouter, Routes ,Route} from 'react-router-dom'
import Home from '../../my/src/component/home'
import './App.css'
import Update from '../../my/src/component/Update'
const App = () => {
  return (
    <div>
      <nav>
        <a href="/"><li>Home</li></a>
        <a href="/about"><li>About</li></a>
        <a href="/nestede"><li>Nested</li></a>
      </nav>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/update/:id' element={<Update />} />

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
