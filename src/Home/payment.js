import React, { useEffect , useState } from "react";
import './payment.css'
import { IoChevronBack } from "react-icons/io5";
import { Link , useLocation } from 'react-router-dom';

function Payment() {

    const location = useLocation();
    const currentUser = location.state?.user

    const [allhistory , setallhistory] = useState([]);
    const [needtopay , setneedtopay] = useState([]) ;
    const [allprice , setallprice] = useState(0) ;
    const [allpoints , setallpoints] = useState(0) ;
    const [pic , setpic] = useState(null);
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
        if(currentUser){
            const userdata = allhistory?.find(data => data.email === currentUser[0]?.email)
            console.log(userdata)

            const needtopay = userdata?.alldata.filter(data => data.payment === notpay)
            console.log(needtopay)

            const totalprice = needtopay?.reduce((acc, cur) => acc + (cur.price || 0) , 0);
            const totalpoints = needtopay?.reduce((acc , cur) => acc + (cur.points || 0) , 0);
            
            setallprice(totalprice)
            setallpoints(totalpoints)
            setneedtopay(needtopay)
        }
    } , [allhistory, currentUser]);

    const showneedtopay = () => {
        if(needtopay?.length > 0){
            return(needtopay.map((data , index) => {
                return(
                    <div className="warpTopay" key={index}>
                        <div className='paytext'>NAME:</div><p>{data.boardgame}</p>
                        <div className='paytext'>TABLE:</div><p>{data.table}</p>
                        <div className='paytext'>DATE:</div><p>{new Date(data.bookdate).toLocaleDateString()}</p>
                        <div className='paytext'>START:</div><p>{new Date(data.starttime).toLocaleTimeString()}</p>
                        <div className='paytext'>END:</div><p>{new Date(data.endtime).toLocaleTimeString()}</p>
                        <div className='paytext'>POINTS:</div><p>{data.points}</p>
                        <div className='paytext'>PRICE:</div><p>{data.price}</p>
                    </div>
                )}
            ))
        }else{
            return <div className='notfound'>You don't needtopay anything</div>
        };
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0] ;
        setpic(file)
    }

    const handleFileUpload = async() => {
        if(!pic){
            alert('No file selected');
            return;
        }else{
            const history = allhistory.find(history => history.email === currentUser[0].email)
            const historyId = history ? history._id : null ;

            try {
                const response = await fetch(`http://localhost:5000/api/allhistory/${historyId}` , {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                } ,
                body: JSON.stringify({
                    alldata: history.alldata.map(data => ({
                        ...data,
                        payment: 'checking'
                    }))
                })
            })
            if(response.ok){
                alert('Payment succesfully')
            }
            const updated = await fetch('http://localhost:5000/api/allhistory');
            if (updated.ok) {
                const updatedData = await updated.json();
                setallhistory(updatedData);
            }
            }catch (error) {
                console.log(error)
            }
        }
    }

    return(
        <section className="paymenthead">
            <div className="back">
                <nav><Link to='/Home'><IoChevronBack size={40} color='rgb(241, 237, 211)'/></Link></nav>
                <h2 className="head">Payment</h2>
            </div>
            <div className="warpAllpayment">
                <div className="setdisplay">
                    <div className="containpayment">
                        {showneedtopay()}
                    </div>
                    <div className="containpromtpay">
                        <div className="promptPay"></div>
                        <p className="fake">Fake PromptPay</p>
                    </div>
                </div>
                <div className="total">
                    <div className="totalprice"><div className="totalpricetext">Total price :</div>{allprice}</div>
                    <div className="totalpoints"><div className="totalpointstext">Total points :</div>{allpoints}</div>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="selectfile"
                    />
                    <button onClick={handleFileUpload} className="confirmSubmit">Submit</button>
                </div>
            </div>
        </section>
    )
}

export default Payment ;