import React , { useEffect , useState } from "react";
import { Link } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import './table.css';
import { RiDeleteBin5Fill } from "react-icons/ri";

function Table() {
    const [Alltable , setalltable] = useState('') ;
    const [newtable , setnewtable] = useState('') ;
    const [TableID , settableID] = useState('')

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
                const ID = data[0]?._id || "" ;
                const alltable = data[0]?.Tables || [];
                settableID(ID)
                setalltable(alltable);
            }catch(error){
                console.error('Error:', error);
            }
        };

        fetchTable();
    }, []);

    console.log(TableID)

    const Addtable = async() => {
        const newallTable = [...Alltable , newtable] ;

        try {
            const response = await fetch(`http://localhost:5000/api/alltables/${TableID}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Tables: newallTable
                })
            });
    
            if (response.ok) {
                await response.json();
                alert('Added table successfully');
                setalltable(newallTable);
                setnewtable('');
            } else {
                console.log('Error updating status');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const deleteTable = async(index) => {
        const newtables = Alltable.filter((_ , ind) => ind !== index) ;

        try {
            const response = await fetch(`http://localhost:5000/api/alltables/${TableID}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Tables: newtables
                })
            });
    
            if (response.ok) {
                await response.json();
                alert('Deleted table successfully');
                setalltable(newtables);
                setnewtable('');
            } else {
                console.log('Error updating status');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return(
        <section className="updatetablehead">
            <div className="back">
                <nav><Link to='/Adminpage' className="backtoadmin"><IoChevronBack size={40} color='rgb(241, 237, 211)'/></Link></nav>
                <h2 className="Tablehead">Update table</h2>
            </div>
            <div className="warpAllTable">
                {Alltable.length > 0 ? ( Alltable.map((data , index) => {
                    return(
                        <div key={index} className="Table">
                            {data}
                            <button className="deletetable" onClick={() => deleteTable(index)}><RiDeleteBin5Fill size={20} /></button>
                        </div>
                    )
                })) : (
                    <div></div>
                )
                }
            </div>
            <div className="Addnewtable">
                <input type="text" className="inputnewtable" value={newtable} onChange={(e) => setnewtable(e.target.value)}></input>
                <button className='addTable' onClick={() => Addtable()}>ADD</button>
            </div>
        </section>
    )
}

export default Table