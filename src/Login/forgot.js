import React from 'react';
import  './forgot.css'
import { IoChevronBack } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";

function Forgot() {
        return(
        <section className='forgotbackground'>   
            <div className='warpForgot'>
                <div className='back'>
                    <nav><Link to='/'><IoChevronBack size={30}/></Link></nav>
                </div>
                <div className='email'>Reset password</div>
                <p className='word'>Enter your email</p>

                <div className='emailbox'>
                    <input type='text' placeholder='Email'></input>
                    <MdEmail className='mailIcon' />
                </div>

                <div className='submit'>
                    <button type='submit'>Submit</button>
                </div>
            </div>
        </section> 
        )
    }

export default Forgot ;