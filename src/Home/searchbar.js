import React from "react";
import './searchbar.css'
import { FaSearch } from "react-icons/fa";

function SearchBar({placeholder , data}) {
    return(
        <div className='search'>
            <div className='searchinput'>
                <input type='text' placeholder="Search" />
                <div className='searchicon'><FaSearch className="icon"/></div>
            </div>
            <div className='result'></div>
        </div>
    )
}

export default SearchBar ;