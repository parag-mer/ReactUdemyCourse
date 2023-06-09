import classes from './HeaderCardButton.module.css';
import CartIcon from '../Cart/CartIcon';
import { useContext } from 'react';
import CartContext from '../store/cart-context';
export default function HeaderCartButton(props)
{
   const cartCtx = useContext(CartContext);
   
   const numberofCartItems = cartCtx.items.reduce((curNumber , item) => {return curNumber + item.amount } , 0); 
    return(
    <button className={classes.button} onClick={props.cartdisplay}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>
            Your Cart
        </span>
        <span className={classes.badge}>
            {numberofCartItems}
        </span>
    </button>
   ); 
}