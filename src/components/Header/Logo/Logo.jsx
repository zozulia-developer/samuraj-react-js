import React from 'react';
import s from './Logo.module.css';

const Logo = () => {
    return (
        <div className={s.iqNavbarLogo + " d-flex justify-content-between"}>
            <a href="index.html">
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/1024px-Facebook_icon_2013.svg.png' alt='logo' />
                <span>Fakebook</span>
            </a>
            <div className={s.iqMenuButton + " align-self-center"}>
                <div className={s.wrapperMenu}>
                    <div className={s.mainCircle}>
                        <i className={s.riMenuLine}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Logo;