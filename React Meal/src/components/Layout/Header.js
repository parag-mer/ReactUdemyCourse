import {Fragment} from 'react';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
export default function Header(props)
{
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton cartdisplay = {props.displaycart}/>
            </header>
            <div className={classes['main-image']}>
                <img src='https://b.zmtcdn.com/data/pictures/chains/0/18017630/d8923476749840e74d6443dc9060c122.jpg'alt='img'></img>
            </div>
        </Fragment>
    );
}