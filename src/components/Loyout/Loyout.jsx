import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Loyout = ({card, users}) => {
  return (
    <div>
        <Header card={card} users={users}/>
        <Outlet />
    </div>
  )
}

export default Loyout