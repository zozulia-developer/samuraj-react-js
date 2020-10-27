import React from 'react';
import store from '../../../redux/redux-store';
import s from './SuppContent.module.css';

const SuppContent = (props) => {

    return (
        <div id="navbarSupportedContent" className="collapse navbar-collapse">
            <ul className={"navbar-nav ml-auto " + s.navbarList}>
                <li>
                    <a className={s.iqWavesEffect + ' d-flex align-items-center'} href="#">
                        <img className="img-fluid rounded-circle mr-3" src="https://www.nationalplasto.in/img/profile.png" alt="user" />
                        <div className={s.caption}>
                            <h6 className={'mb-0 ' + s.lineHeight}>
                                info
                            </h6>
                        </div>
                    </a>
                </li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

export default SuppContent;