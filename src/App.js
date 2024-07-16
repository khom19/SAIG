import './App.css';
import React , { Component } from 'react';
import { FaUser , FaLock } from "react-icons/fa";
import './index' ;
import { Link } from 'react-router-dom';

<div className='phone'>
  <div className='rotate'>Please rotate your phone!</div>
</div>

class App extends Component {
  render () {
  return (
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
          <nav><Link to='/forgot'>Forgot password?</Link></nav>
        </div>

        <div className='singIn'>
          <button type='submit'>Sign in</button>
        </div>

        <div className='account'>
        <nav>Don't have an account?<Link to='/signUp'>Sign Up</Link></nav>
        </div>
      </div>
    </div>
    );
  }
} 

export default App;
