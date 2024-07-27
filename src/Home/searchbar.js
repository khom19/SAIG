import React , {useState} from "react";
import './searchbar.css'
import { FaSearch } from "react-icons/fa";

function SearchBar({placeholder , data}) {
        const [filter , setFilterData] = useState([]) ;

        const handleFilter = (event) => {
            const searchWord = event.target.value ;
            const newFilter = data.filter((value) => {
                return value.name.includes(searchWord) ;
            }) ;
            setFilterData(newFilter) ;
        } ;
    
    return(
        <div className='search'>
            <div className='searchinput'>
                <input type='text' placeholder={placeholder} onChange={handleFilter} />
                <div className='searchicon'><FaSearch className="icon"/></div>
            </div>
            {filter.length != 0 && (
            <div className='result'>
                {filter.map((dataname , index) => {
                    return(
                        <a className="searchData"><div className="text">{dataname.name}</div></a>
                    )
                })}
            </div>
            )}
        </div>
    )
}

export default SearchBar ;