import React from 'react'
import "./Lower.css"
import MenuIcon from '@mui/icons-material/Menu';
function Lower() {
return (
    <div className='lower_container'>
        <ul>
            <li>
                <MenuIcon size={25} />
                <p>All</p>
            </li>
            <li>Today's Deals</li>
            <li>Customers Service</li>
            <li>Registry</li>
            <li>Gift Cards</li>
            <li>Sell</li>
        </ul>

    </div>
)
}

export default Lower