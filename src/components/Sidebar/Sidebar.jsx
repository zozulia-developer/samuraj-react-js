import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={s.iqSidebar}>
            <div id="sidebar-scrollbar" className={s.sidebarScrollbar} data-scrollbar="true" tabindex="-1">
                <div className={s.scrollContent}>
                    <nav className={s.iqSidebarMenu}>
                        <ul id="iq-sidebar-toogle" className={s.iqMenu}>
                            <li className={`${s.item} ${s.active}`}>
                                <NavLink to="/news" activeClassName={s.activeLink}>Новости</NavLink>
                            </li>
                            <li className={`${s.item}`}>
                                <NavLink to="/profile" activeClassName={s.activeLink}>Профиль</NavLink>
                            </li>
                            <li className={s.item}>
                                <NavLink to="/users" activeClassName={s.activeLink}>Друзья</NavLink>
                            </li>
                            <li className={s.item}>
                                <NavLink to="/dialogs" activeClassName={s.activeLink}>Сообщения</NavLink>
                            </li>
                            <li className={s.item}>
                                <a>Настройки</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;