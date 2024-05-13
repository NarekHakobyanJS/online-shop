
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Loyout from './components/Loyout/Loyout';
import { useState } from 'react';
import Cards from './pages/Cards/Cards';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';

function App({ products, users }) {
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
        <Route path='/' element={<Loyout card={card} users={users}/>}>
          <Route index element={<Home />} />
          <Route path='/products' element={<Products products={products} addToCard={addToCard} />} />
          <Route path='/cards' element={<Cards card={card} BTNSClick={BTNSClick} />} />
          <Route path='/login' element={<Login users={users}/> }/>
          <Route path='/profile' element={<Profile /> }/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
