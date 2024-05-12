import React, { useState } from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import './Header.css'
import PopupCard from '../PopupCard/PopupCard';
const Header = ({ card }) => {
    const [open, setOpen] = useState(false);

    const openCard = () => {
        setOpen(!open)
    }
    return (
        <header>
            <nav>
                <NavLink to='/'>home</NavLink>
                <NavLink to='/products'>products</NavLink>
                <NavLink to='/cards'>carts</NavLink>
                <NavLink to='/profile'></NavLink>
                <NavLink></NavLink>
            </nav>
            <div className='header-card' onClick={openCard}>
                <FaShoppingCart />
                {card.length}
            </div>
            {
                open && <PopupCard card={card}/>
            }
        </header>
    )
}

export default Header