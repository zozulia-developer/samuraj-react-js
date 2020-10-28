import React from 'react';
import './App.css';
import './style/reset.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Users from './components/Users/Users';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import { Route } from 'react-router-dom';

const App = () => {
    return (
        <div className='wrapper'>
            <Sidebar />
            <Header />
            <div id='content-page' className='content-page'>
                <div className="container">
                    <div className='row' >
                        <Route path="/news"
                            render={() => <News />} />
                        <Route path="/profile"
                            render={() => <Profile />} />
                        <Route path="/dialogs"
                            render={() => <DialogsContainer />} />
                        <Route path="/users"
                            render={() => <Users />}/>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default App;