import React, { useState , useEffect } from "react";
import './profile.css'
import { IoChevronBack } from "react-icons/io5";
import { Link , useLocation } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { IoLogOutSharp } from "react-icons/io5";
import { PiCoinVerticalDuotone } from "react-icons/pi";

function Profile() {
    const [nowuserhistory , setnowhistory] = useState([]);
    const [points , setallpoints] = useState(0);
    const location = useLocation();
    const user = location.state?.user;

    console.log(user) ;

    useEffect(() => {
        const fetchhistory = async() => {
            try {
                const response = await fetch('http://localhost:5000/api/allhistory');
                if (response.ok) {
                    console.log("fectched history success");
                  }else{
                    console.log("Error");
                  }
                const data = await response.json();
                const nowuser = data?.filter(data => data.email === user[0].email) ;
                setnowhistory(nowuser);
            }catch(error){
                console.error('Error:', error);
            }
        };
    
        fetchhistory();
    }, []);

        const showallpoints = () => {
            const paidboardgame = nowuserhistory[0]?.alldata.filter(data => data.payment === 'paid')
            const totalpoints = paidboardgame?.reduce((acc , cur) => acc + (cur.points || 0) , 0)
            console.log(totalpoints)
            setallpoints(totalpoints);
        }

        useEffect(() => {
            if (nowuserhistory.length > 0) {
                showallpoints();
            }
        }, [nowuserhistory]);

    return( 
    <section className="profilehead">
        <div className="back">
            <nav><Link to='/Home'><IoChevronBack size={40} color='rgb(241, 237, 211)'/></Link></nav>
            <h2 className="head">Profile</h2>
        </div>
        {user.map((info , index) => {
            return(
            <div key={index} className="warpProfileInfo">
                <div className="email"><div className="emailhead">Email<MdEmail className="emailIcon" /></div> <p className="emailInfo">{info.email}</p></div>
                <div className="username"><div className="usernamehead">Username<FaUserCircle className="usernameIcon" size={22.5}/></div><p className="usernameInfo">{info.username}</p></div>
                <div className="totalprofilepoints"><div className="pointshead">Points<PiCoinVerticalDuotone className="totalicon" size={25}/></div><p className="points">{points}</p></div>
            </div>
            )
        })}
        <nav className="logout"><Link to={'/'} className="logoutLink"><div className="logoutText">Logout</div><IoLogOutSharp className="logoutIcon" size={22.5} /></Link></nav>

    </section>
    )
}

export default Profile ;