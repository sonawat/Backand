import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Signup from './Signup';
import Home from './Home';
import About from './Router/About';
import Admi from './Router/Admi';
import Bussiness from './Bussiness';
import Other from './Router/Other';
import Company from './Router/company';
import Protected from './Router/Protected';
import Login from './login';

const App = () => {
  return (
    <div>
      <h1>Jay Mata Di</h1>
      <BrowserRouter>
        <NavLink to='/sign'><button>Sign Up</button></NavLink>
        <NavLink to='/login'><button>Login</button></NavLink>
        <NavLink to='/'><button>Home</button></NavLink>
        <NavLink to='/about'><button>About</button></NavLink>
        <NavLink to='/business'><button>Business</button></NavLink>
        <Routes>
          <Route path="/sign" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Protected val={Home}/>} />
          <Route path="/about" element={<Protected val={About} />} />
          <Route path="/about/:user" element={<Admi />} />
          <Route path='/business' element={<Bussiness />}>
            <Route path='/business/other' element={<Other />}></Route>
            <Route path='/business/company' element={<Company />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
