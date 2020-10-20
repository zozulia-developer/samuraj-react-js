import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <a href="#">
                <img src='https://autoakpp.com.ua/wp-content/themes/autoakpp/img/logo-text.png' alt="logo" />
            </a>
        </header>
    );
}

export default Header;