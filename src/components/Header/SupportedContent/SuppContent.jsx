import React from 'react';
import s from './SuppContent.module.css';
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/img/profile.png";

const SuppContent = ({login, logout}) => {
    return (
        <div id="navbarSupportedContent" className="collapse navbar-collapse">
            <ul className={"navbar-nav ml-auto " + s.navbarList}>
                <li>
                    <NavLink className={s.iqWavesEffect + ' d-flex align-items-center'} to={"/profile/"}>
                        <img
                          className="img-fluid rounded-circle mr-3"
                          src={userPhoto} alt="user" />
                        <div className={s.caption}>
                            <h6 className={'mb-0 ' + s.lineHeight}>{login}</h6>
                        </div>
                    </NavLink>
                </li>
                <li><button className="btn btn-danger" onClick={logout}>Log out</button></li>
            </ul>
        </div>
    )
}

export default SuppContent;