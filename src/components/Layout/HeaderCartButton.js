import Cart from '../Cart/Cart';
import CartIcon from '../Cart/CartIcon';
import  ReactDOM  from 'react-dom';
import classes from './HeaderCartButton.module.css';
const HeaderCartButton = (props) => {
    const openCart =()=>{
    }
    return (
        <button onClick={props.onClick} className={classes.button}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>3</span>
        </button>
    )
}
export default HeaderCartButton;