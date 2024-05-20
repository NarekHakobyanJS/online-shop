import React, { useEffect, useRef, useState } from 'react'
import './Product.css'
import { Rating } from 'react-simple-star-rating'

const Product = ({ prod, addToCard, countRepetItem }) => {
  const [itemCountForCard, setItemCountForCard] = useState(0)
  const [disabled, setDisabled] = useState(false);

  // console.log(prod)
  const [rating, setRating] = useState(0)

  const handleRating = (rate) => {
    setRating(rate)
  }
  const onPointerEnter = () => console.log('Enter')
  const onPointerLeave = () => console.log('Leave')
  const onPointerMove = (value, index) => console.log(value, index)

  useEffect(() => {
    if (!prod.rating.count) {
      setDisabled(true);
      setItemCountForCard(5)
    }
  }, [])

  const add = (item) => {
    addToCard(item)
    setItemCountForCard(itemCountForCard + 1)
    countRepetItem(item.id)
    if (!prod.rating.count) {
      setDisabled(true)
    }
  }
  return (
    <div className='prod'>
      <h3>{prod.title}</h3>
      <img src={prod.image} />
      <Rating initialValue={prod.rating.rate}/>
      <button
        disabled={disabled}
        onClick={() => add(prod)}>add to card {itemCountForCard ? itemCountForCard : ''}</button>
    </div>
  )
}

export default Product
