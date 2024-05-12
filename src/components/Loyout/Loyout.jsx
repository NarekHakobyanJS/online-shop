import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Loyout = ({card}) => {
  return (
    <div>
        <Header card={card}/>
        <Outlet />
    </div>
  )
}

export default Loyout