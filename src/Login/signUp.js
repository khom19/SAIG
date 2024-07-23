import React , { useState } from 'react';
import './signUp.css'
import { Link } from 'react-router-dom';
import { IoChevronBack } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaUser , FaLock , FaKey  } from "react-icons/fa";

export let users = []

export default function SignUp(){

const [email , setEmail] = useState('') ;
const [username , setUsername] = useState('') ;
const [password , setPassword] = useState('') ;
const [confirmpassword , setConfirmPassword] = useState('') ;
const [UserType , setUsertype] = useState('');
const [secretkey , setSecret] = useState('') ;

const handleSubmit = (e) => {

    if(UserType == "admin" && secretkey != "admin123"){
        e.preventDefault() ;
        alert("Invalid Key") ;
    }else if(confirmpassword != password){
        alert("Passwords do not match") ;
        e.preventDefault() ;
    }else if(password.length < 8 ){
        alert("Password must be at least 8 characters") ;
        e.preventDefault() ;
    }else{
        e.preventDefault() ;

        console.log(email , username , password , confirmpassword);
        users.push({email , username , password}) ;
        }
    } ;

        return(
    <form onSubmit={handleSubmit}>
        <section className='signupbackground'>
            <div className='warpSingUp'>
                <div className='back'>
                    <nav><Link to='/'><IoChevronBack size={30}/></Link></nav>
                </div>
                <div className='signup'>Sign up</div>
                <p className='word'>Create your account</p>
                <div className='role'>
                    <input 
                    className='inputU'
                    type='radio'
                    name='UserType'
                    value='user'
                    onChange={(e) => setUsertype(e.target.value)} />
                    <div className='user'>User</div>
                    <input 
                    className='inputA'
                    type='radio'
                    name='UserType'
                    value='admin'
                    onChange={(e) => setUsertype(e.target.value)} />
                    <div className='admin'>Admin</div>
                </div>
                {UserType == 'admin'?
                <div className='secretkey'>
                    <input type='text' 
                    placeholder='Key' 
                    required 
                    value={secretkey}
                    onChange={(e) => setSecret(e.target.value)}>
                    </input>
                    <FaKey className='icon'/>
                </div>:null}
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
        </section>
    </form>
        )
    }
