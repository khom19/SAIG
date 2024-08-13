import { Link , useNavigate} from 'react-router-dom';
import React , {useState , useEffect} from 'react';
import { FaUser , FaHistory } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import '../Home/searchbar.css'
import { FaSearch } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import Button from '../Home/button.js' ;
import './admin.css';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BsPlusCircleDotted } from "react-icons/bs";

function Adminpage() {
    const [boardGame , setboardGame] = useState([]);
    const [filter , setFilterData] = useState([]) ;
    const [wordsEnter , setWordsEnter] = useState("") ;
    const [displayItems , setdisplayItems] = useState(boardGame);
    const [admin , setadmin] = useState([]) ;
    const navigate = useNavigate();
    let newItems ;

    useEffect(() => {
        const fetchboard = async() => {
            try {
                const response = await fetch('http://localhost:5000/api/boardgames');
                if (response.ok) {
                    console.log("fectched boardgames success");
                  }else{
                    console.log("Error");
                  }
                const data = await response.json();
                setboardGame(data);
                setdisplayItems(data);
            }catch(error){
                console.error('Error:', error);
            }
        };

        fetchboard();
    }, []);

    useEffect(() => {
        const fetchcurrentAdmin = async() => {
            try {
                const response = await fetch('http://localhost:5000/api/currentAdmin');
                if (response.ok) {
                    console.log("fectched success");
                  }else{
                    console.log("Error");
                  }
                const data = await response.json();
                setadmin(data);
            }catch(error){
                console.error('Error:', error);
            }
        };
      
        fetchcurrentAdmin();
      }, []);

    console.log(boardGame);

    const menuItems = [...new Set(boardGame.map((val) => val.category))] ;

    const filterCategory = (cate) => {
        newItems = boardGame.filter((newval) => newval.category === cate);
        setdisplayItems(newItems); 
    }

    const handleFilter = (event) => {
        const searchWord = event.target.value ;
        setWordsEnter(searchWord) ;
        const newFilter = boardGame.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase()) ;
        }) ;
        if(searchWord === ''){
            setFilterData([]);
            setdisplayItems(boardGame);
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
       const searchDataItem = boardGame.find((item) => item.name.toLowerCase() === wordsEnter.toLowerCase());
            if(searchDataItem){
                setdisplayItems([searchDataItem]) ;    
            }else{
                setdisplayItems(boardGame) ;
            }
            console.log(searchDataItem) ;
        } ;

    const boardpop = (board) => {
        navigate('/Update', {state:{board}}) ;
    }

    console.log(admin) ;

    const boarddelete = async(id , e) => {
        e.stopPropagation();
        try{
            const response = await fetch(`http://localhost:5000/api/boardgames/${id}` , {
                method: 'DELETE' ,
                headers: {
                     'Content-Type': 'application/json'
                }
            });

            if(response.ok){
                alert('Successfully deleted') ;
                try {
                    const response = await fetch('http://localhost:5000/api/boardgames');
                    if (response.ok) {
                        console.log("fectched boardgames success");
                      }else{
                        console.log("Error");
                      }
                    const data = await response.json();
                    setboardGame(data);
                    setdisplayItems(data);
                }catch(error){
                    console.error('Error:', error);
                }
            }else{
                alert('Cannot deleted boardgames') ;
            }
        }catch (error) {
            console.log('Error:' , error) ;
        }
    }

    const goToAdd = () => {
        navigate('/Addboardgame')
    }

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
                <div className='payment'><nav><Link to='/AllUserPayment' state={{admin}}><MdPayment className='icon' /></Link></nav></div>
                <div className='history'><nav><Link to='/History' state={{admin}}><FaHistory className='icon' /></Link></nav></div>
                <div className='profile'><nav><Link to='/AdminProfile' state={{admin}}><FaUser className='icon'/></Link></nav></div>
            </div>
            <div className='containCate'>
                < Button 
                menuItems={menuItems}
                filterCategory = {filterCategory}
                setdisplayItems = {setdisplayItems}  
                boardGames={boardGame}      
                />
            </div>
            <div className='display'>{displayItems.map((board , index) => {
                return(
                    <div key={index} className='board_name' onClick={() => boardpop(board)} >
                        <div className='warp_home'>
                            <img className='picture' src={board.pic}/>
                            <div className='info'>
                                <div className='name'>{board.name}</div>
                                <div className='players'>( {board.players} players )</div>
                                <button className='deleteboard' onClick={(e) => boarddelete(board._id , e)}><RiDeleteBin5Fill size={17.5}/></button>
                            </div>
                        </div>
                    </div>
                    )
                }
            )}
            </div>
            <button className='addboard'><BsPlusCircleDotted size={100} onClick={() => goToAdd()}/></button>
        </section>   
        ) 
}

export default Adminpage