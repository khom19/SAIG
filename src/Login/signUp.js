import React , { Component } from 'react';
import './signUp.css'
import { Link } from 'react-router-dom';
import { IoChevronBack } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaUser , FaLock } from "react-icons/fa";

class SignUp extends Component {
    render() {
        return(
            <div className='warpSingUp'>
                <div className='back'>
                    <nav><Link to='/'><IoChevronBack /></Link></nav>
                </div>
                <div className='signup'>Sign up</div>
                <p className='word'>Create your account</p>
                <div className='email'>
                    <input type='email' placeholder='Email'></input>
                    <MdEmail className='icon' />
                </div>
                <div className='username'>
                    <input type='text' placeholder='Username'></input>
                    <FaUser className='icon'/>
                </div>
                <div className='password'>
                    <input type='password' placeholder='Password'></input>
                    <FaLock className='icon'/>
                </div>
                <div className='confirmpassword'>
                    <input type='password' placeholder='Confirm password'></input>
                    <FaLock className='icon'/>
                </div>
                <div className='submit'>
                    <button type='submit'>Sign up</button>
                </div>
            </div>
        )
    }
}

export default SignUp ;