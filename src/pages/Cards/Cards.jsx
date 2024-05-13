import React, { useState } from 'react'
import Card from '../../components/Card/Card'
import './Cards.css'

import Order from '../../components/Order/Order'

const Cards = ({card, BTNSClick}) => {
  const allPrice = card.reduce((accum, el) => el.priceAdd + accum, 0)
  return (
    <div className='cards'>

        <div className='cardsItem'>
            {
                card.map((c) => {
                    return <Card c={c} key={c.id} BTNSClick={BTNSClick}/>
                })
            }
        </div>
        <div className='order'>
          <Order />
          <h3> @ndhanur gumare ______ {allPrice} $</h3>
        </div>
    </div>
  )
}

export default Cards