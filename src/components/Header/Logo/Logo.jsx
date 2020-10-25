import React from 'react';
import s from './Logo.module.css';

const Logo = () => {
    return (
        <div className={s.iqNavbarLogo + " d-flex justify-content-between"}>
            <a href="index.html">
                <img src='https://iqonic.design/themes/socialv/html/images/logo.png' alt='logo' />
                <span>Zashkvar</span>
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