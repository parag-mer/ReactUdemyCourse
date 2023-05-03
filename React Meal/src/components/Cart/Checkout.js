import classes from './checkout.module.css';

export default function Checkout(props)
{
    const confirmHandler = (event) => {
        event.preventDefault();

    }
    
    return(
        <form onSubmit={confirmHandler}>
            <div className={classes.control}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name'/>
            </div>
            <div className={classes.control}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street'/>
            </div>
            <div className={classes.control}>
                <label htmlFor='postal'>postal code</label>
                <input type='text' id='postal'/>
            </div>
            <div className={classes.control}>
                <label htmlFor='city'>city</label>
                <input type='text' id='name'/>
            </div>
            <button>Confirm</button>
            <button onClick={props.close}>Cancel</button>
        </form>
    );
}