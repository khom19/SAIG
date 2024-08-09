import React, { useState , useEffect } from "react";
import { Link , useLocation } from "react-router-dom";
import { IoChevronBack , IoTimeOutline } from "react-icons/io5";
import { BsCoin , BsCalendarDate } from "react-icons/bs";
import { PiDesk } from "react-icons/pi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css"
import './boardpopup.css' ;

function Boardpop() {
    const location = useLocation();
    const boardInfo = location.state?.board ;

    const [starttime , setstarttime] = useState(new Date()) ;
    const [endtime , setendtime] = useState(new Date()) ;
    const [bookdate , setbookdate] = useState(new Date()) ;
    const [booktable , settable] = useState('') ;
    const [Arraytable , setselecttable] = useState('') ;
    const [price , setprice] = useState(0) ;
    const allTables = Arraytable.length > 0 ? Arraytable[0]?.Tables : [];

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
            if(starttime != 0 && endtime != 0){
                const time = (endtime-starttime)/3600000 ;
                const price = time*20 ;
                setprice(price);
            }
        };
    
        calculatePrice() ;
    }, [starttime , endtime , booktable]) ;

    const minTime = new Date();
    minTime.setHours(9, 0, 0);

    const maxTime = new Date();
    maxTime.setHours(21, 0, 0);

    const today = new Date();
    
    const handlebookdate = (Date) => {
        setbookdate(Date) ;
    }

    const handleStart = (Time) => {
        setstarttime(Time) ;
        if(Time >= endtime){
            setendtime(new Date(Time.getTime() + 3600000)) ;
        }
    }

    const handleEnd = (Time) => {
        setendtime(Time) ;
    }

    const handlebookTable = (event) => {
        settable(event.target.value) ;
    }

   const filter = (time) => {
        const hours = time.getHours();
        return hours >= 9 && hours <= 21;
   }

    return(
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
                                    maxTime={maxTime}
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
                                        <option key={index} value={table}>{table}</option>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Boardpop