import React , {useState} from "react";
import './searchbar.css'
import { FaSearch } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

function SearchBar({placeholder , data}) {
        const [filter , setFilterData] = useState([]) ;
        const [wordsEnter , setWordsEnter] = useState("") ;

        const handleFilter = (event) => {
            const searchWord = event.target.value ;
            setWordsEnter(searchWord) ;
            const newFilter = data.filter((value) => {
                return value.name.toLowerCase().includes(searchWord.toLowerCase()) ;
            }) ;
            if(searchWord === ''){
                setFilterData([]);
            }else{
                setFilterData(newFilter) ;
            }
        } ;

        const clearInput = () => {
            setFilterData([]);
            setWordsEnter("") ;
        } ;
    
    return(
        <div className='search'>
            <div className='searchinput'>
                <input type='text' placeholder={placeholder} value={wordsEnter} onChange={handleFilter} />
                {filter.length === 0 ? (<div className='searchicon'><FaSearch className="icon"/></div>) 
                :(<button className='searchicon' onClick={clearInput}><IoCloseSharp className="closeicon" /></button>)}
            </div>
            {filter.length != 0 && (
            <div className='result'>
                {filter.slice(0,20).map((dataname , index) => {
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