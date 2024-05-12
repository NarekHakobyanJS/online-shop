import React, { useState } from 'react'
import Card from '../../components/Card/Card'

const Cards = ({card}) => {
  return (
    <div>

        <div className='cardsItem'>
            {
                card.map((c) => {
                    return <Card c={c} key={c.id}/>
                })
            }
        </div>
    </div>
  )
}

export default Cards