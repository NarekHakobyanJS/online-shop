import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Loyout = ({card, users, filterProducts}) => {
  return (
    <div>
        <Header card={card} users={users} filterProducts={filterProducts}/>
        <Outlet />
    </div>
  )
}

export default Loyout