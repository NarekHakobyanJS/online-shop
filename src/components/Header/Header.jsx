import React, { useState } from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import './Header.css'

const Header = ({ card, users }) => {


    //// useri logikan pti stugvi stex 
    
    const [open, setOpen] = useState(false);
    let user = "Hakob1234"
    
    const openCard = () => {
        setOpen(!open)
    }
    return (
        <header>
            <nav>
                <NavLink to='/'>home</NavLink>
                <NavLink to='/products'>products</NavLink>
            </nav>
            <div className='header-card'>
                <NavLink to='/cards'>
                    <FaShoppingCart />
                </NavLink>
                <NavLink to={user === "Hakob123" ? '/profile' : '/login'}>
                    <FaUserAlt />
                </NavLink>
            </div>

        </header>
    )
}

export default Header