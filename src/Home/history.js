import { Link } from 'react-router-dom';
import React from "react";
import './history.css'
import { IoChevronBack } from "react-icons/io5";
import Home from "./home";

function History() {
    return(
        <section className="historybackground">
            <div className="back">
                <nav><Link to='/Home'><IoChevronBack /></Link></nav>
                <h2 className="head">History</h2>
            </div>
        </section>
    )
}

export default History ;