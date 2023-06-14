import React, { useState } from 'react'
import "./Navbar.scss";
import { Link } from 'react-router-dom'
import { SearchOutlined, ShoppingBasket} from "@material-ui/icons"
import { useStateValue } from '../../StateProvider';

const Navbar = () => {
 const [{basket},dispatch] = useStateValue();
  console.log(basket)
  return (
    <div className='navbar'>
     <div className="container">
        <div className="left">

          <Link to="/" className='logoLink'><span className='logo'>ChriBenZ</span></Link>
           
           <span className='dot'>.</span>
        </div>
        <div className="center">
           <input className='searchInput' type="text"placeholder=' Search parts or Enginears..' />
           <SearchOutlined className='searchInputIcon'/>
        </div>
        <div className="right">
            <div className="options">
              <Link className='links' to="/register">
                 <span className="optionOne">Helo</span>
                 <span className="optionTwo">Sign-In</span>
              </Link>
            </div>
            <div className="options">
              <Link className='links' to="/orders">
                 <span className="optionOne">Returns</span>
                 <span className="optionTwo">Orders</span>
              </Link>
            </div>
            <div className="options">
              <Link className='links' to="/orders">
                 <span className="optionOne">Our</span>
                 <span className="optionTwo">Mechanics</span>
              </Link>
            </div>
            <div className="optionBasket">
              <Link className='linksIcon' to="/checkout">
                 <ShoppingBasket className='basket'/>
                 <span className="numberOfItems">{basket?.length }</span>
              </Link>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar
