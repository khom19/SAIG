import React from "react";
import './button.css' ;

function Button({menuItems , filterCategory , setdisplayItems ,boardGame}) {
    return(
        <div className="container">
            {
                menuItems.map(val => (
                    <button className='category' onClick={() => filterCategory(val)}>
                        {val}
                    </button>
                ))
            }
            <button className='category' onClick={() => setdisplayItems(boardGame)}>
                All
            </button>
        </div>
    )
}

export default Button ;