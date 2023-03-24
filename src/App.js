import { Fragment, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [cartIsShown, setIsCardShown] = useState(false);
  const showCartHandler = (props) => {
    // console.log(props);
    setIsCardShown(true);
  }
  const hideCartHandler = () => {
    setIsCardShown(false);
  }
  return (
    <Fragment>
      {cartIsShown && <Cart closeCart={hideCartHandler}/>}
      <Header onShowCart = {showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  )
}

export default App;
