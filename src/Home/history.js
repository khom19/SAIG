import { Link , useLocation } from 'react-router-dom';
import React , { useEffect , useState } from "react";
import './history.css'
import { IoChevronBack } from "react-icons/io5";

function History() {
    const location = useLocation() ;
    const currentuser = location.state?.user ;

    const [allhistory , setallhistory] = useState([]);
    const [showhistory , setshowhistory] = useState([]);
    const notpay = "waiting" ;

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
        if(currentuser){
            const currentUserHistory = allhistory?.find(data => data.email === currentuser[0]?.email)
            console.log(currentUserHistory)

            const paidHistory = currentUserHistory?.alldata.filter(data => data.payment !== notpay)
            console.log(paidHistory)
            
            setshowhistory(paidHistory)
        }
    } , [allhistory, currentuser]);

        const showHistory = () => {
            if (showhistory?.length > 0 ) {
                return showhistory.map((data, index) => (
                    <div key={index} className='showHistory'>
                        <div className='text'>NAME:</div><p>{data.boardgame}</p>
                        <div className='text'>TABLE:</div><p>{data.table}</p>
                        <div className='text'>DATE:</div><p>{new Date(data.bookdate).toLocaleDateString()}</p>
                        <div className='text'>START:</div><p>{new Date(data.starttime).toLocaleTimeString()}</p>
                        <div className='text'>END:</div><p>{new Date(data.endtime).toLocaleTimeString()}</p>
                        <div className='text'>POINTS:</div><p>{data.points}</p>
                        <div className='text'>PRICE:</div><p>{data.price}</p>
                        <div className='text'>STATUS:</div><p>{data.status}</p>
                    </div>
                ));
            } else {
                return <div className='notfound'>You don't have history</div>;
            }
    };

    return(
        <section className="historyhead">
            <div className="back">
                <nav><Link to='/Home'><IoChevronBack size={40} color='rgb(241, 237, 211)'/></Link></nav>
                <h2 className="head">History</h2>
            </div>
            <div className='warpcontain'>
                <div className='containHistory'>
                    {showHistory()}
                </div>
            </div>
        </section>
    )
}

export default History ;