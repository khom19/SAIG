import React, { useEffect , useState } from "react";
import './payment.css'
import { IoChevronBack } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Payment() {

    const [allhistory , setallhistory] = useState([]);

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

    return(
        <section className="paymenthead">
            <div className="back">
                <nav><Link to='/Home'><IoChevronBack size={40} color='rgb(241, 237, 211)'/></Link></nav>
                <h2 className="head">Payment</h2>
            </div>
            <div className="promptPay"></div>
            <p className="fake">Fake PromptPay</p>
        </section>
    )
}

export default Payment ;