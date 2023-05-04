import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { Fragment, useContext } from "react";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import { useState } from "react";


export default function Cart(props) {
  const cartCtx = useContext(CartContext);

  const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const [orderDetails , setOrderDetails] = useState(false);
  const [isSubmitting , setIsSubmitting] = useState(false);
  const [didSubmit , setDidSubmit] = useState(false);

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item , amount:1}); 
  }; 
  
  const onSubmitOrderHandler = async(userData) => {
    setIsSubmitting(true);
    
    await fetch('https://rx-udemy-default-rtdb.firebaseio.com/orders.json', {
      method : 'POST',
      body :  JSON.stringify({
        user : userData,
        orderedItems : cartCtx.items 
        })
    });
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };
  

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null , item.id)}
          onAdd={cartItemAddHandler.bind(null , item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.closecart}>
          close
        </button>
        {hasItems && <button className={classes.button} onClick={onOrderHandler}>Order</button>}
      </div>
  );
  const cartModalContent = (
    <Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {orderDetails && <Checkout onconfirm = {onSubmitOrderHandler} close ={props.closecart}/> }
      {!orderDetails && modalActions}  
    </Fragment>
  );

  const isSubmittingModalContent = (
    <p>loading</p>
  );

  const didSubmitModalContent = (
    <p>order received</p>
  )


  function onOrderHandler()
  {
    setOrderDetails(true);
  }
  return (
    <Modal onClose={props.closecart}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
      
    </Modal>
  );
}
