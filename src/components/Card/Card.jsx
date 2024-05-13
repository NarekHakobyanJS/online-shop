import React, { useEffect, useState } from 'react'
import './Card.css'

const Card = ({ c, BTNSClick }) => {

    // console.log(c.priceAdd, c.count, c.price);
    let countProps = c.count

    console.log(countProps);
    let [count, setCount] = useState(c.count)


    useEffect(() => {
        plusToPrice()
        minusToPrice()
    }, [count])

    const plusToPrice = () => {
        // console.log(count);
        setCount(++count)
        BTNSClick(count, c.id)
    }


    const minusToPrice = () => {
        if (count > 0) {
            setCount(--count)
            BTNSClick(count, c.id)
        }
    }

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