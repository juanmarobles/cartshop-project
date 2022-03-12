import React, { useState, useContext } from 'react'
import '../styles/Header.scss';
import Menu from '../components/Menu';
import menu from '../assets/img/icon_menu.svg';
import MyOrder from '../containers/MyOrder';
import AppContext from '../context/AppContext';
import logo from '../assets/img/logo_burger.png';
import ShoppingCart from '../assets/img/icon_shopping_cart.svg';

const Header = () => {


    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const {state} = useContext(AppContext);

    const handleToggle = () => {
        setToggle (!toggle);
    }


    return (
        <nav>
            <img src={ menu } className="menu" />
            <div className="navbar-left">
                <img src={ logo } alt="" className='nav-logo' />
                <ul>
                    <li>
                        <a href="/">Opcion</a>
                    </li>
                    <li>
                        <a href="/">Opcion</a>
                    </li>
                    <li>
                        <a href="/">Opcion</a>
                    </li>
                    <li>
                        <a href="/">Opcion</a>
                    </li>
                    
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className=" pointer navbar-email" onClick={handleToggle}>
                        juanma@test.com
                    </li>
                    <li 
                    className="navbar-shopping-cart" 
                    onClick={() => setToggleOrders(!toggleOrders)}>
                    <img className='pointer' src={ ShoppingCart } alt="shopping cart" />
                    {state.cart.length > 0 ? <div>{state.cart.length}</div>: null}
                    </li>
                </ul>
            </div>
            {toggle && <Menu />}
            {toggleOrders && <MyOrder />}
            
        </nav>
        
       
    );
}

export default Header;

