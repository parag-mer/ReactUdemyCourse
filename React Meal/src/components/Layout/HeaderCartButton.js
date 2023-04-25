import classes from './HeaderCardButton.module.css';
import CartIcon from '../Cart/CartIcon';
export default function HeaderCartButton(props)
{
   return(
    <button className={classes.button}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>
            Your Cart
        </span>
        <span className={classes.badge}>
            1
        </span>
    </button>
   ); 
}