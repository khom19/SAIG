import React, { useState , useEffect } from "react";
import { Link , useLocation ,useNavigate } from "react-router-dom";
import { IoChevronBack , IoTimeOutline } from "react-icons/io5";
import { BsCoin , BsCalendarDate } from "react-icons/bs";
import { PiDesk , PiCoinVerticalDuotone } from "react-icons/pi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css"
import './boardpopup.css' ;

function Boardpop() {
    const location = useLocation();
    const boardInfo = location.state?.board ;
    const currentUser = location.state?.user ;
    const navigate = useNavigate() ;

    const [starttime , setstarttime] = useState(new Date(0)) ;
    const [endtime , setendtime] = useState(new Date(0)) ;
    const [bookdate , setbookdate] = useState(new Date()) ;
    const [booktable , settable] = useState('Table1') ;
    const [Arraytable , setselecttable] = useState('') ;
    const [price , setprice] = useState(0) ;
    const [points , setpoints] = useState(0) ;
    const [allhistory , setallhistory] = useState([]); 
    const [user , setuser] = useState([]) ;
    const allTables = Arraytable.length > 0 ? Arraytable[0]?.Tables : [];

    useEffect(() => {
        const fetchcurrentUser = async() => {
            try {
                const response = await fetch('http://localhost:5000/api/currentUser');
                if (response.ok) {
                    console.log("fectched success");
                  }else{
                    console.log("Error");
                  }
                const data = await response.json();
                setuser(data);
            }catch(error){
                console.error('Error:', error);
            }
        };
      
        fetchcurrentUser();
      }, []);

    useEffect(() => {
        const fetchhistory = async() => {
            try {
                const response = await fetch('http://localhost:5000/api/allhistory');
                if (response.ok) {
                    console.log("fectched history success");
                  }else{
                    console.log("Error");
                  }
                const data = await response.json();
                setallhistory(data);
            }catch(error){
                console.error('Error:', error);
            }
        };
    
        fetchhistory();
    }, []);

    useEffect(() => {
        const fetchTable = async() => {
            try {
                const response = await fetch('http://localhost:5000/api/alltables');
                if (response.ok) {
                    console.log("fectched allTable success");
                  }else{
                    console.log("Error");
                  }
                const data = await response.json();
                setselecttable(data);
            }catch(error){
                console.error('Error:', error);
            }
        };

        fetchTable();
    }, []);

    useEffect(() => {
        const calculatePrice = () => {
            const time = (endtime-starttime)/3600000 ;
            const price = time*20 ;
            const points = price/5 ;
            setprice(price);
            setpoints(points);
        };
    
        calculatePrice() ;
    }, [starttime , endtime , booktable]) ;

    const minTime = new Date();
    minTime.setHours(9, 0, 0);

    const maxTime = new Date();
    maxTime.setHours(21, 0, 0);

    const handlemin = new Date(0);

    const today = new Date();
    
    const handlebookdate = (Date) => {
        setbookdate(Date) ;
    }

    const handleStart = (Time) => {
        setstarttime(Time) ;
        if(Time >= endtime){
            setendtime(new Date(Time.getTime() + 1800000)) ;
        }
    }

    const handleEnd = (Time) => {
        setendtime(Time) ;
        if(handlemin >= starttime){
            setstarttime(new Date(Time.getTime() - 1800000)) ;
        }
    }

    const handlebookTable = (event) => {
        settable(event.target.value) ;
    }

   const filter = (time) => {
        const hours = time.getHours();
        return hours >= 9 && hours <= 21;
   }

   const checkTime = (starttime , endtime) => {
        if (starttime >= endtime) {
            return { status: false, Text: "End time must be after start time" };
        }else {
            return{status:true}
        }
   }

   const Add = async(e) => {
        e.preventDefault();

        const check = checkTime(starttime,endtime) ;
        if(!check.status){
            alert(check.Text)
            return ;
        }
        
        const history = allhistory.find(history => history.email === currentUser[0].email)
        const historyId = history ? history._id : null ;

      if(historyId === null){
        try {
            const response = await fetch('http://localhost:5000/api/allhistory', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    email: currentUser[0].email ,
                    alldata : [{bookdate ,
                        starttime,
                        endtime,
                        table: booktable,
                        price,
                        points,
                        boardgame: boardInfo.name ,
                        status: "waiting",
                        payment: "waiting"
                    }],
                }),
            });
            if (response.ok) {
                alert('Adding to cart successfully');
                navigate('/Payment' , {state:{user}}) ;
                console.log('history created successfully');
            } else {
                alert('Error creating history');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error creating user');
        }
      }else{
        try {
            const responseoldhistory = await fetch(`http://localhost:5000/api/allhistory/${historyId}`) ;
            const history = await responseoldhistory.json();

            const newalldata = [...history.alldata , {
                bookdate,
                starttime,
                endtime,
                table: booktable,
                price,
                points,
                boardgame: boardInfo.name ,
                status: "waiting",
                payment: "waiting"
            }] ;

            const responseupdate = await fetch(`http://localhost:5000/api/allhistory/${historyId}` , {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    alldata : newalldata 
            })
        });
        if (responseupdate.ok) {
            alert('Adding to cart successfully');
            navigate('/Payment' , {state:{user}}) ;
            console.log('Adding to allhistory successfully');
        } else {
            alert('Error');
        }
      }catch (error) {
        console.error('Error:', error);
      }
      }
    };

    return(
        <form onSubmit={Add}>   
        <div className="warpPop">
            <div className="BackHome">
                <nav><Link to='/Home'><IoChevronBack size={40} color='rgb(241, 237, 211)'/></Link></nav>
                <h2 className="head">Info</h2>
            </div>
            <div className="warpBoard">
                <div className="warpBoardImage"><img className="boardImage" src={boardInfo.pic} /></div>
                <div className="descriptandbook">
                    <div className="warpBoardDescript">
                        <h3 className="destext">Description</h3>                        
                        <p>{boardInfo.description}</p>
                    </div>    
                    <div className="warpbook">
                        <h3>Book your game!</h3>
                        <div className="date">
                            <div className="datecontain"><BsCalendarDate size={25} className="dateIcon" /> : </div>
                            <DatePicker
                                selected={bookdate}
                                onChange={handlebookdate}
                                dateFormat="dd-MM-yyyy"
                                className="datePicker"
                                minDate={today}
                            />
                        </div>
                        <div className="Time">
                            <div className="Timecontain">
                                <IoTimeOutline size={30} className="TimeIcon" /> : 
                            </div>
                            <div className="start-end">
                                <DatePicker
                                    selected={starttime}
                                    onChange={handleStart}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={30}
                                    timeCaption="Time"
                                    dateFormat="h:mm aa"
                                    minTime={minTime}
                                    maxTime={maxTime.getTime() - 1800000}
                                    filterTime={filter}
                                    className="timePicker"
                                />
                                - 
                                <DatePicker
                                    selected={endtime}
                                    onChange={handleEnd}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={30}
                                    timeCaption="Time"
                                    dateFormat="h:mm aa"
                                    minTime={starttime.getTime() + 1800000}
                                    maxTime={maxTime}
                                    filterTime={filter}
                                    className="timePicker"
                                /> 
                            </div>
                        </div>
                        <div className="Table">
                            <div className="TableContain"><PiDesk size={27.5} className="TableIcon"/> 
                                <div className="Tabletext">
                                    :
                                </div>
                            <select className="selectbox" value={booktable} onChange={handlebookTable}>
                                {allTables.length >0 ? allTables.map((table , index) => {
                                    return(
                                        <option key={index} value={table} >{table}</option>
                                    )
                                }) : <option></option>
                            }
                            </select>
                            </div>
                        </div>
                        <div className="price">
                            <div className="pricecontain">
                                <BsCoin className="priceIcon" size={25}/> :
                                <div className="showprice">{price} Baht</div>
                                <PiCoinVerticalDuotone className="pointsIcon" size={25}/> :
                                <div className="showpoints">{points} Points</div>
                            </div>
                            <div className="Book">
                                <button type="submit" className="Booking">Add to cart</button>
                            </div>
                        </div>
                        <div className="PStext"><p> * Don't worry! When you play, you can change the boardgame any time.</p></div>
                    </div>
                </div>
            </div>
        </div>
        </form>  
    )
}

export default Boardpop