import classes from './checkout.module.css';
import { useRef , useState } from 'react';
const Checkout = (props) => {

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const pinInputRef = useRef();
    const cityInputRef = useRef();

    const isEmpty = (value) => value.trim() === '';
    const isValidPin = (value) => value.trim().length !== 6;

    const [formInputsValidity , setFormInputValidity] = useState({
        name : true,
        street : true,
        city : true,
        pin : true
    })

    const confirmHandler = (event) => {
        event.preventDefault();
        
        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPin = pinInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const validName = !isEmpty(enteredName);
        const validStreet = !isEmpty(enteredStreet);
        const validPin = !isValidPin(enteredPin);
        const validCity = !isEmpty(enteredCity);

        setFormInputValidity(
            {
                name : validName,
                street : validStreet,
                city : validCity,
                pin : validPin
            }
        );                                                                             
        
        const validForm = validName && validStreet && validCity && validPin;

        if(!validForm)
        {
            return;
        }

        props.onconfirm({
            name : enteredName,
            street : enteredStreet,
            pin : enteredPin,
            city : enteredCity
        });
    };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={`${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef}/>
        {!formInputsValidity.name && <p>Invalid name</p>}
      </div>
      <div className={`${classes.control} ${formInputsValidity.street ? '' : classes.invalid}`}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef}/>
        {!formInputsValidity.street && <p>Invalid street</p>}
      </div>
      <div className={`${classes.control} ${formInputsValidity.pin ? '' : classes.invalid}`}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={pinInputRef}/>
        {!formInputsValidity.pin && <p>Invalid pin (must have 6 characters)</p>}
      </div>
      <div className={`${classes.control} ${formInputsValidity.city ? '' : classes.invalid}`}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef}/>
        {!formInputsValidity.city && <p>Invalid city</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.close}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;