import React, { useState } from 'react'
import './Card.css'

const Card = ({ c, }) => {

    console.log(c.priceAdd, c.count, c.price);
    // let [price, setPrice] = useState(c.price)
    // let [count, setCount] = useState(1)

    
    const plusToPrice = () => { 
    //     setCount(++count)

    //     setPrice((prev) => {
    //         return c.price * count
    //     })
    }


    const minusToPrice = () => {
    //     if (count > 1) {
    //         setCount(--count)
    //         setPrice((prev) => {
    //             return c.price * count
    //         })
    //     }
     }

    // setReduce((prev) => [...prev, price])
    // reduce.push(price)
    // console.log(price);
    return (
        <>
            <div className='card-block'>
                <div className='left-card'>
                    <img src={c.image} />
                    <h4>{c.title}</h4>
                </div>
                <div className='right-card'>
                    <button onClick={plusToPrice}>+</button>
                    <span>{c.priceAdd}</span> $
                    {/* <h1>{count}</h1> */}
                    <button onClick={minusToPrice}>-</button>
                </div>
                
            </div>
        </>
    )
}

export default Card