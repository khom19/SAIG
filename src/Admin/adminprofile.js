import React from "react";
import { IoChevronBack } from "react-icons/io5";
import { Link , useLocation } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { IoLogOutSharp } from "react-icons/io5";

function AdminProfile() {
    const location = useLocation();
    const Admin = location.state?.admin;

    console.log(Admin) ;

    return(
        <section className="profilehead">
        <div className="back">
            <nav><Link to='/Adminpage'><IoChevronBack size={40} color='rgb(241, 237, 211)'/></Link></nav>
            <h2 className="head">Profile</h2>
        </div>
        {Admin.map((info , index) => {
            return(
            <div key={index} className="warpProfileInfo">
                <div className="email"><div className="emailhead">Email<MdEmail className="emailIcon" /></div> <p className="emailInfo">{info.email}</p></div>
                <div className="username"><div className="usernamehead">Username<FaUserCircle className="usernameIcon" size={22.5}/></div><p className="usernameInfo">{info.username}</p></div>
            </div>
            )
        })}
        <nav className="logout"><Link to={'/'} className="logoutLink"><div className="logoutText">Logout</div><IoLogOutSharp className="logoutIcon" size={22.5} /></Link></nav>

    </section>
    )
}

export default AdminProfile
