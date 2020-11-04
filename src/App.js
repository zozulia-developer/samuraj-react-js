import React from 'react';
import './App.css';
import './style/reset.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Sidebar from './components/Sidebar/Sidebar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import { Route } from 'react-router-dom';

const App = () => {
    return (
        <div className='wrapper'>
            <Sidebar />
            <HeaderContainer />
            <div id='content-page' className='content-page'>
                <div className="container">
                    <div className='row' >
                        <Route path="/news"
                            render={() => <News />} />
                        <Route path="/profile/:userId?"
                            render={() => <ProfileContainer />} />
                        <Route path="/dialogs"
                            render={() => <DialogsContainer />} />
                        <Route path="/users"
                            render={() => <UsersContainer />} />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default App;