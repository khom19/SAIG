import './App.css';
import React from 'react';
import { FaUser , FaLock } from "react-icons/fa";
import './index' ;
import { Link } from 'react-router-dom';

function App() {
  return (
  <section className='background'>
    <div className='warp'>
      <h1>Welcome to Board-Go</h1>
      <div className='warp-box'>
        <h2 className='head'>Login</h2>

        <div className='inputbox'>
          <input type='text' placeholder='Username' required></input>
          <FaUser className='icon'/>
        </div>
        <div className='inputbox'>
          <input type='password' placeholder='Password' required></input>
          <FaLock className='icon'/>
        </div>

        <div className='forgot-remem'>
          <label className='remem'>
            <input type='checkbox' ></input>
            Remember me
          </label>
          <nav><Link to='/Forgot'>Forgot password?</Link></nav>
        </div>

        <div className='singIn'>
          <button type='submit'>Sign in</button>
        </div>

        <div className='account'>
        <nav>Don't have an account?<Link to='/SignUp'>Sign Up</Link></nav>
        </div>
      </div>
    </div> 
  </section>   
    );
  }

export default App;
