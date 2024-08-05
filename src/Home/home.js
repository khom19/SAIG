import { Link } from 'react-router-dom';
import React , {useState} from 'react';
import { FaUser , FaHistory } from "react-icons/fa";
import { MdDescription, MdPayment } from "react-icons/md";
import './home.css'
import './searchbar.css'
import { FaSearch } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import Button from './button.js' ;
import { boardGame } from './data.js';

    let searchDataItem = [] ;
    let index ;
    let newItems

function Home() {

    const menuItems = [...new Set(boardGame.map((val) => val.category))] ;

    const [filter , setFilterData] = useState([]) ;
    const [wordsEnter , setWordsEnter] = useState("") ;
    const [displayItems , setdisplayItems] = useState(boardGame);

    const filterCategory = (cate) => {
        newItems = boardGame.filter((newval) => newval.category === cate)
        setdisplayItems(newItems) 
    }

    const handleFilter = (event) => {
        const searchWord = event.target.value ;
        setWordsEnter(searchWord) ;
        const newFilter = boardGame.filter((value) => {
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
    } ;

    const goSearch = () => {
        const holdData = wordsEnter ;
        for (let i = 0; i < boardGame.length; i++) {
            if(holdData == boardGame[i].name){
                index = i ;
                searchDataItem[0] = boardGame[index] ;
                setdisplayItems(searchDataItem) ;
                break ;
            }else{
                searchDataItem = [] ;
                setdisplayItems(boardGame) ;
            }
        }
        console.log(searchDataItem) ;
        //window.location.reload();
    } ;

        return(
        <section className='homebackground'>
            <div className='menu'>
                <p>Board-Go</p>
                <div className='search'>
            <div className='searchinput'>
                <input type='text' placeholder="Search" value={wordsEnter} onChange={handleFilter} />
                {filter.length === 0 ? (<div className='searchicon'><FaSearch className="icon" onClick={goSearch} /></div>) 
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
                <div className='payment'><nav><Link to='/Payment'><MdPayment className='icon' /></Link></nav></div>
                <div className='history'><nav><Link to='/History'><FaHistory className='icon' /></Link></nav></div>
                <div className='profile'><nav><Link to='/user'><FaUser className='icon'/></Link></nav></div>
            </div>
            <div className='containCate'>
                < Button 
                menuItems={menuItems}
                filterCategory = {filterCategory}
                setdisplayItems = {setdisplayItems}        
                />
            </div>
            <div className='display'>{displayItems.map((board , index) => {
                return(
                    <div key={index} className='board_name' >
                        <div className='warp_home'>
                            <img className='picture' src={board.pic}/>
                            <div className='info'>
                                <div className='name'>{board.name}</div>
                                <div className='players'>( {board.players} players )</div>
                            </div>
                        </div>
                    </div>
                    )
                }
            )}
            </div>
        </section>   
        ) 
    }

export default Home ;