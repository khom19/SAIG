import React from "react";
import './profile.css'
import { IoChevronBack } from "react-icons/io5";
import { Link , useLocation } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { IoLogOutSharp } from "react-icons/io5";

function Profile() {
    const location = useLocation();
    const user = location.state?.user;

    console.log(user) ;

    return( 
    <section className="profilehead">
        <div className="back">
            <nav><Link to='/Home'><IoChevronBack size={40} color='rgb(241, 237, 211)'/></Link></nav>
            <h2 className="head">Profile</h2>
        </div>
        {user.map((info , index) => {
            return(
            <div key={index} className="warpProfileInfo">
                <div className="email"><div className="emailhead"><MdEmail className="emailIcon" />Email</div> <p className="emailInfo">{info.email}</p></div>
                <div className="username"><div className="usernamehead"><FaUserCircle className="usernameIcon" />Username</div><p className="usernameInfo">{info.username}</p></div>
            </div>
            )
        })}
        <nav className="logout"><Link to={'/'} className="logoutLink"><div className="logoutText">Logout</div><IoLogOutSharp className="logoutIcon" size={22.5} /></Link></nav>

    </section>
    )
}

export default Profile ;