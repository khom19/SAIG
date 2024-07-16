import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { FaUser , FaHistory } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import './home.css'

class Home extends Component {
    render() {
        return(
        <section className='homebackground'>
            <div className='menu'>
                <div className='profile'><FaUser className='icon'/></div>
                <div className='history'><FaHistory className='icon' /></div>
                <div className='payment'><MdPayment className='icon' /></div>
            </div>
        </section>   
        ) 
    }
}

export default Home ;