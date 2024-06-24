import React from 'react'
import "./Header.css"
import Logo from './Haimag/amazone.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase"
import Lower from './Lower';
function Header() {
    const [{basket,user},dispache] = useStateValue()
return (
    <>
    <div className='hader'>
        <Link to="/" className="custom_hader">
        <img className='hader_logo' src={Logo}/>
        </Link>
        <div className='serche'>
                {/* serche bar */}
            <select name="" id="">
                <option value="">All</option>
            </select>
                <input type="text" id="" placeholder='Serche product'/>
        
        <span><SearchIcon size={25}/></span>
        </div>
        {/* <div className='header_search'>
            
            <input className='hader_searchInput' type='text' placeholder='Search product'/>
                <SearchIcon className="header_searchIcon" />
        </div> */}
        <div className='header_nav'>
            <Link to={!user && "/auth"} className='custom_link'>

            <div className='header_obtion'>
                <span className='header_optionLineOne'>
                    {
                        user?(
                            <>
                            <h4>Hello {user?.email?.split("@")[0]}</h4>
                            
                            <h4 onClick={()=>auth.signOut()} className="custom_login">Login Out</h4>

                            </>
                        ):(
                            <>
                            <p>Sign in</p>
                            
                            <span className='header_optionLineTwo'>Accounte & Lists</span>
                        </>
                        )
                    }
                </span>
                
            </div>
            </Link>

            <Link  className="custom_link">
            <div className='header_obtion'>
                <span className='header_optionLineOne'>returns</span>
                <span className='header_optionLineTwo'>& Orders</span>
            </div>
            </Link>

            <Link  className='custom_link'>
            <div className='header_obtion'>
                <span className='header_optionLineOne'>Your</span>
                <span className='header_optionLineTwo'>Prime</span>
            </div>
            </Link>

            <Link to="/chackout" className="custom_link">
            <div className='header_optionBasket'>
                <ShoppingBasketIcon/>

                {basket.length}
            </div>
            
            </Link>
        </div>
    </div>
    <Lower/>
    </>
)
}

export default Header