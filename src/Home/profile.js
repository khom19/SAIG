import React from "react";
import './profile.css'
import { IoChevronBack } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Profile() {
    return( 
    <section className="profilehead">
        <div className="back">
            <nav><Link to='/Home'><IoChevronBack size={40} color='rgb(241, 237, 211)'/></Link></nav>
            <h2 className="head">Profile</h2>
        </div>
    </section>
    )
}

export default Profile ;