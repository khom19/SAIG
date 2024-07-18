import { Link } from 'react-router-dom';
import React, { Component } from 'react';
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
                <div className='payment'><MdPayment className='icon' /></div>
                <div className='history'><FaHistory className='icon' /></div>
                <div className='profile'><FaUser className='icon'/></div>
            </div>
        </section>   
        ) 
    }

export default Home ;