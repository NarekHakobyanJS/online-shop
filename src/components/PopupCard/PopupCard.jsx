import React, { useState } from 'react'
import './PopupCard.css'

const PopupCard = ({ card }) => {
  const [str, setStr] = useState(20)
  return (
    <div className='open'>
      {
        card.map((c) => {
          return (
            <div className='open-block'>
              <img src={c.image} />
              <h4>
                {
                  c.title.length > str ? ` ${c.title.slice(0, str)}... ` : c.title
                }
              </h4>
            </div>
          )
        })
      }
    </div>
  )
}

export default PopupCard