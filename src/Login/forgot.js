import React , { Component } from 'react';
import  './forgot.css'
import { IoChevronBack } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";

class Forgot extends Component {
    render() {
        return(
            <div className='warpForgot'>
                <div className='back'>
                    <nav><Link to='/'><IoChevronBack /></Link></nav>
                </div>
                <div className='email'>Reset password</div>

                <div className='emailbox'>
                    <input type='text' placeholder='email'></input>
                    <MdEmail className='mailIcon' />
                </div>

                <div className='submit'>
                    <button type='submit'>Submit</button>
                </div>
            </div>
        )
    }
}

export default Forgot ;