import React from 'react'
import Product from '../../components/Product/Product'
import './Products.css';

const Products = ({products, addToCard, countRepetItem}) => {
  return (
    <div>
      <div className='products'>
      {
        products.map((prod) => {
          return <Product key={prod.id} prod={prod} addToCard={addToCard} countRepetItem={countRepetItem}/>
        })
      }
      </div>
    </div>
  )
}

export default Products