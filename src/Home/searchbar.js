import React from "react";
import './searchbar.css'
import { FaSearch } from "react-icons/fa";

function SearchBar({placeholder , data}) {
    return(
        <div className='search'>
            <div className='searchinput'>
                <input type='text' placeholder={placeholder} />
                <div className='searchicon'><FaSearch className="icon"/></div>
            </div>
            <div className='result'>
                {data.map((dataname , index) => {
                    return(
                        <a className="searchData"><div className="text">{dataname.name}</div></a>
                    )
                })}
            </div>
        </div>
    )
}

export default SearchBar ;