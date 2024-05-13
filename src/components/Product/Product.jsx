import React, {useState} from 'react'
import './Product.css'
import { Rating } from 'react-simple-star-rating'

const Product = ({ prod, addToCard }) => {
  // const [rating, setRating] = useState(0)
  
  // const handleRating = (rate) => {
  //   setRating(rate)
  // }
  // const onPointerEnter = () => console.log('Enter')
  // const onPointerLeave = () => console.log('Leave')
  // const onPointerMove = (value, index) => console.log(value, index)

  return (
    <div className='prod'>
      <h3>{prod.title}</h3>
      <img src={prod.image} />

      <button onClick={() => addToCard(prod)}>add to card</button>
    </div>
  )
}

export default Product