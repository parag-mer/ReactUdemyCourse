import { NavLink } from "react-router-dom";
import classes from './mainNavigation.module.css';
export default function MainNavigation()
{
    return(
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li><NavLink to="/" className={({isActive})=>{ isActive ? classes.active : undefined}} end>Home</NavLink></li>
                    <li><NavLink to="/content" className={({isActive})=>{ isActive ? classes.active : undefined}}>Content</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}