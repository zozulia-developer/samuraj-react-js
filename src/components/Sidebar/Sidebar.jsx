import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={s.iqSidebar}>
            <div id="sidebar-scrollbar" className={s.sidebarScrollbar} data-scrollbar="true" tabindex="-1">
                <div className={s.scrollContent}>
                    <nav className={s.iqSidebarMenu}>
                        <div className={`${s.item} ${s.active}`}>
                            <NavLink to="/news" activeClassName={s.activeLink}>Новости</NavLink>
                        </div>
                        <div className={`${s.item}`}>
                            <NavLink to="/profile" activeClassName={s.activeLink}>Профиль</NavLink>
                        </div>
                        <div className={s.item}>
                            <a>Друзья</a>
                        </div>
                        <div className={s.item}>
                            <NavLink to="/dialogs" activeClassName={s.activeLink}>Сообщения</NavLink>
                        </div>
                        <div className={s.item}>
                            <a>Музыка</a>
                        </div>
                        <div className={s.item}>
                            <a>Настройки</a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;