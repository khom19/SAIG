import React from "react";
import './updateboard.css';
import { Link , useLocation } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

function Updateboard() {
    const location = useLocation();
    const currentboard = location?.state.board ;

    console.log(currentboard) ;

    return(
        <section className="UpdateBoardhead">
            <div className="back">
                <nav><Link to='/Adminpage' className="backtoadmin"><IoChevronBack size={40} color='rgb(241, 237, 211)'/></Link></nav>
                <h2 className="Updatehead">Update Boardgame</h2>
            </div>
        </section>
    )
}

export default Updateboard