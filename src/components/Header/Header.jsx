import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://autoakpp.com.ua/wp-content/themes/autoakpp/img/logo-text.png' />
        </header>
    );
}

export default Header;