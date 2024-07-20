import React from "react";
import './payment.css'
import { IoChevronBack } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Payment() {
    return(
        <section className="paymentbackground">
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