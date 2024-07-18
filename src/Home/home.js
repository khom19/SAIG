import { Link } from 'react-router-dom';
import React from 'react';
import { FaUser , FaHistory } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import './home.css'
import SearchBar from './searchbar';

function Home() {
        return(
        <section className='homebackground'>
            <div className='menu'>
                <p>Board-Go</p>
                <SearchBar />
                <div className='payment'><nav><Link to='/Payment'><MdPayment className='icon' /></Link></nav></div>
                <div className='history'><nav><Link to='/History'><FaHistory className='icon' /></Link></nav></div>
                <div className='profile'><FaUser className='icon'/></div>
            </div>
        </section>   
        ) 
    }

export default Home ;