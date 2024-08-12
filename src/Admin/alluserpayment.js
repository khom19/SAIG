import React , { useEffect , useState } from "react";
import "./alluserpayment.css";
import '../Home/payment.css'
import { IoChevronBack } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { GoCheckCircleFill , GoXCircleFill } from "react-icons/go";

function AlluserPayment() {
    const [Alluserhistory , setallhistory] = useState([]);

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

    const handleaccept = async(email , index) => {
        try {
            const response = await fetch('http://localhost:5000/api/allhistory' , {
                method: 'PUT' ,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    index,
                    status: 'paid'
                })
            });
            if(response.ok){
                const data = await response.json();
                setallhistory(data);
                const newresponse = await fetch('http://localhost:5000/api/allhistory');
                if (newresponse.ok) {
                    alert('Updated successfully')
                }else{
                    console.log("Error to updated");
                }
            }
        }catch(error){
            console.log("Error:" , error)
        }
    }

    return(
        <section className="paymenthead">
            <div className="back">
                <nav><Link to='/Adminpage' className="backtoadmin"><IoChevronBack size={40} color='rgb(241, 237, 211)'/></Link></nav>
                <h2 className="Adminhead">All users payment</h2>
            </div>
            <div className="warpuseremail">
                <div className="userAlldata">
                {Alluserhistory.map((history) => (
                        <div className="warpUser" key={history._id}>
                            <div className="warpemail">
                                <div className="emailtext">Email :</div>
                                <div className="useremail">{history.email}</div>
                            </div>
                            <div className="warpdetail">
                                {history.alldata.map((detail, index) => (
                                    detail.payment === 'checking' ? (
                                        <div className="detail" key={index}>
                                            <p><div className="detailtext">Book Date :</div> {new Date(detail.bookdate).toLocaleString()}</p>
                                            <p><div className="detailtext">Start Time :</div> {new Date(detail.starttime).toLocaleTimeString()}</p>
                                            <p><div className="detailtext">End Time :</div> {new Date(detail.endtime).toLocaleTimeString()}</p>
                                            <p><div className="detailtext">Table :</div> {detail.table}</p>
                                            <p><div className="detailtext">Board Game :</div> {detail.boardgame}</p>
                                            <p><div className="detailtext">Price :</div> ${detail.price}</p>
                                            <p><div className="detailtext">Points :</div> {detail.points}</p>
                                            <p><div className="detailtext">Status :</div> {detail.status}</p>
                                            <button className="accept" onClick={() => handleaccept( history.email , index)}><GoCheckCircleFill size={25}/></button>
                                            <button className="reject"><GoXCircleFill size={25}/></button>
                                        </div>
                                    ) : null
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AlluserPayment