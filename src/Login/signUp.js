import React , { useState } from 'react';
import './signUp.css'
import { Link } from 'react-router-dom';
import { IoChevronBack } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaUser , FaLock } from "react-icons/fa";

function SignUp(){

const [email , setEmail] = useState('') ;
const [username , setUsername] = useState('') ;
const [password , setPassword] = useState('') ;
const [confirmpassword , setConfirmPassword] = useState('') ;

const handleSubmit = (e) => {
    if(password == confirmpassword && password.length >= 8){
        const userInfo = { email , username , password } ;
        console.log(userInfo) ;
        e.preventDefault();
        alert("Success") ;
    }else if(password.length < 8 ){
        alert("Passwords must be at least 8 characters.") ;
        e.preventDefault();
    }else{
        alert("Passwords are not match.") ;
        e.preventDefault();
    }
}

//const express = require('express')
//const app = express()

//app.get

        return(
    <section className='signupbackground'>
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className='warpSingUp'>
                <div className='back'>
                    <nav><Link to='/'><IoChevronBack /></Link></nav>
                </div>
                <div className='signup'>Sign up</div>
                <p className='word'>Create your account</p>
                <div className='email'>
                    <input type='email' 
                    placeholder='Email'
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}>
                    </input>
                    <MdEmail className='icon' />
                </div>
                <div className='username'>
                    <input type='text' 
                    placeholder='Username' 
                    required 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}>
                    </input>
                    <FaUser className='icon'/>
                </div>
                <div className='password'>
                    <input type='password' 
                    placeholder='Password' 
                    required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}>
                    </input>
                    <FaLock className='icon'/>
                </div>
                <div className='confirmpassword'>
                    <input type='password' 
                    placeholder='Confirm password' 
                    required 
                    value={confirmpassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    >
                    </input>
                    <FaLock className='icon'/>
                </div>
                <div className='submit'>
                    <button type='submit' >Sign up</button>
                </div>
            </div>
        </form>
    </section>
        )
    }

export default SignUp ;