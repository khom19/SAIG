import React ,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import './addboard.css';

function Addboard() {
    const [name , setboardname] = useState('') ;
    const [players , setplayers] = useState('');
    const [category , setcategory] = useState('');
    const [description , setdescription] = useState('');
    const [pic , setpic] = useState('');
    const navigate = useNavigate();

    const addnewboard = async(name , players , category , description , pic) => {
        try {
            const response = await fetch('http://localhost:5000/api/boardgames', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, players, category ,description , pic }),
            });
            if(response.ok) {
                alert('Added boardgame successfully');
                navigate('/Adminpage')
            } else {
                alert('Error to added boardgame');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error creating user');
        }
    }

return(
    <section className="AddBoardhead">
            <div className="back">
                <nav><Link to='/Adminpage' className="backtoadmin"><IoChevronBack size={40} color='rgb(241, 237, 211)'/></Link></nav>
                <h2 className="Addhead">Add Boardgame</h2>
            </div>
            <div className="warpAllInfo">
                <div className="inputboard">Name :<input type="text" value={name} onChange={(e) => setboardname(e.target.value)}></input></div>
                <div className="inputboard">Players :<input type="text" value={players} onChange={(e) => setplayers(e.target.value)}></input></div>
                <div className="inputboard">Category :<input type="text" value={category} onChange={(e) => setcategory(e.target.value)}></input></div>
                <div className="inputboard">Description :<input type="text" value={description} onChange={(e) => setdescription(e.target.value)}></input></div>
                <div className="inputboard">Picture URL :<input type="text" value={pic} onChange={(e) => setpic(e.target.value)}></input></div>
            </div>
            <button className="addnewboardgame" onClick={() => addnewboard(name , players , category , description ,pic)}>Add</button>
    </section>
)
}

export default Addboard