import React from 'react';
import s from './Navbar.module.css';

//let s = {
//    'nav': 'Navbar_nav__3s6AW',
//    'item': 'Navbar_item__P-MYt'
//}

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}><a>Profile</a></div>
            <div className={s.item}><a>Messages</a></div>
            <div className={s.item}><a>News</a></div>
            <div className={s.item}><a>Music</a></div>
            <div className={s.item}><a>Settings</a></div>
        </nav>
    );
}

export default Navbar;