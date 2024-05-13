
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Loyout from './components/Loyout/Loyout';
import { useState } from 'react';
import Cards from './pages/Cards/Cards';

function App({ products }) {
  const [card, setCard] = useState([]);

  const addToCard = (product) => {
    let isInArray = false

    card.forEach((el) => {
      if (el.id === product.id) {
        isInArray = true
        setCard(card.map((el) => {
          return {
            ...el,
            count: ++el.count,
            priceAdd: el.price * el.count
          }
        }))
      }
    })

    if (!isInArray)
      setCard((prev) => {
        return [...prev, product]
      })
  }

  const BTNSClick = (countBTN, id) => {
    setCard(card.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          count: countBTN,
          priceAdd: el.price * el.count
        }
      } else {
        return el
      }
    }))
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Loyout card={card} />}>
          <Route index element={<Home />} />
          <Route path='/products' element={<Products products={products} addToCard={addToCard} />} />
          <Route path='/cards' element={<Cards card={card} BTNSClick={BTNSClick} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
