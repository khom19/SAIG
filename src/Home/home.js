import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { FaUser } from "react-icons/fa";
import './home.css'

class Home extends Component {
    render() {
        return(
            <div className='background-color'>
                <div className='menu'><FaUser className='icon'/></div>
            </div>
        ) 
    }
}

export default Home ;