import React from 'react'
import './Product.css'

const Product = ({ prod, addToCard }) => {
  return (
    <div className='prod'>
      <h3>{prod.title}</h3>
      <img src={prod.image} />
      <button onClick={() => addToCard(prod)}>add to card</button>
    </div>
  )
}

export default Product