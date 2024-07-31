/*import React , {useState} from "react";
import './searchbar.css'
import { FaSearch } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

export let searchDataItem = [] ;

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

        const handleClick = (value) => {
            console.log(value) ;
            setWordsEnter(value);
            setFilterData([]) ;
        }

        const goSearch = () => {
            const holdData = wordsEnter ;
            let index ;
            for (let i = 0; i < data.length; i++) {
                if(holdData == data[i].name){
                    index = i ;
                }
            }
            searchDataItem[0] = index ;
            console.log(searchDataItem) ;
        }
    
    return(
        <div className='search'>
            <div className='searchinput'>
                <input type='text' placeholder={placeholder} value={wordsEnter} onChange={handleFilter} />
                {filter.length === 0 ? (<div className='searchicon'><FaSearch className="icon" onClick={goSearch}/></div>) 
                :(<button className='searchicon' onClick={clearInput}><IoCloseSharp className="closeicon" /></button>)}
            </div>
            {filter.length != 0 && (
            <div className='result'>
                {filter.slice(0,20).map((dataname , index) => {
                    return(
                        <a className="searchData" onClick={() => handleClick(dataname.name)}><div className="text">{dataname.name}</div></a>
                    )
                })}
            </div>
            )}
        </div>
    )
}

export default SearchBar ; */