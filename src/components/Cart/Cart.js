import Modal from "../UI/Modal";
import classes from './Cart.module.css'

const Cart = (props) => {
    let cartItemArr = [{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }]
    const cartItems = <ul>
        {cartItemArr.map(item => {
           return <li>{item.name}</li>
        })}
    </ul>
    return (
        <Modal closeCart={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.closeCart} >Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
};

export default Cart;
