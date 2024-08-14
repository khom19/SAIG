import React, { useState } from "react";
import './updateboard.css';
import { Link , useLocation , useNavigate} from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

function Updateboard() {
    const location = useLocation();
    const currentboard = location?.state.board ;
    const [newname , setnewname] = useState(currentboard.name) ;
    const [newplayers , setnewplayers] = useState(currentboard.players) ;
    const [newcategory , setnewcategory] = useState(currentboard.category) ;
    const [newdescript , setnewdescript] = useState(currentboard.description) ;
    const [newpic , setnewpic] = useState(currentboard.pic) ;
    const navigate = useNavigate();

    console.log(currentboard) ;

    const updateboard = async(name , players , category , description , pic) => {
        try {
            const response = await fetch(`http://localhost:5000/api/boardgames/${currentboard._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    players,
                    category,
                    description,
                    pic
                })
            });
    
            if (response.ok) {
                await response.json();
                alert('Updated boardgame successfully');
                navigate('/Adminpage');
            } else {
                console.log('Error updating status');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return(
        <section className="UpdateBoardhead">
            <div className="back">
                <nav><Link to='/Adminpage' className="backtoadmin"><IoChevronBack size={40} color='rgb(241, 237, 211)'/></Link></nav>
                <h2 className="Updatehead">Update Boardgame</h2>
            </div>
            <div className="warpOldBoard">
                <h2>OLD</h2>
                <div className="old"><div className="oldtext">Name :</div>{currentboard.name}</div>
                <div className="old"><div className="oldtext">Players :</div>{currentboard.players}</div>
                <div className="old"><div className="oldtext">Category :</div>{currentboard.category}</div>
                <div className="old"><div className="oldtext">Description :</div>{currentboard.description}</div>
                <div className="old"><div className="oldtext">Picture URL :</div>{currentboard.pic}</div>
            </div>
            <div className="warpNewBoard">
                <h2>NEW</h2>
                <div className="new">
                    <div className="newtext">Name :</div>
                    <input type="text" className="newinputtext" value={newname} onChange={(e) => setnewname(e.target.value)}></input>
                </div>
                <div className="new">
                    <div className="newtext">Players :</div>
                    <input type="text" className="newinputtext" value={newplayers} onChange={(e) => setnewplayers(e.target.value)}></input>
                </div>
                <div className="new">
                    <div className="newtext">Category :</div>
                    <input type="text" className="newinputtext" value={newcategory} onChange={(e) => setnewcategory(e.target.value)}></input>
                </div>
                <div className="new">
                    <div className="newtext">Description :</div>
                    <input type="text" className="newinputtext" value={newdescript} onChange={(e) => setnewdescript(e.target.value)}></input>
                </div>
                <div className="new">
                    <div className="newtext">Picture URL :</div>
                    <input type="text" className="newinputtext" value={newpic} onChange={(e) => setnewpic(e.target.value)}></input>
                </div>
            </div>
            <button className="updateboard" onClick={() => updateboard(newname , newplayers ,newcategory ,newdescript ,newpic)}>Update</button>
        </section>
    )
}

export default Updateboard