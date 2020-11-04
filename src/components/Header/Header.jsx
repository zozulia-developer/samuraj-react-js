import React from 'react';
import s from './Header.module.css';
import Logo from './Logo/Logo';
import Search from './SeachBar/Search';
import SuppContent from './SupportedContent/SuppContent';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={s.iqTopNavbar}>
            <div className={s.iqNavbarCustom}>
                <nav className="navbar navbar-expand-lg navbar-light p-0">
                    <Logo />
                    <Search />
                    {props.isAuth ? <SuppContent /> : <NavLink to="/login">Login</NavLink>}
                </nav>
            </div>
        </header>
    );
}

export default Header;