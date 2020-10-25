import React from 'react';
import './App.css';
import './style/reset.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='wrapper'>
                <Sidebar />
                <Header userInfo={props.state.profilePage} />
                <div id='content-page' className='content-page'>
                    <div className="container">
                        <div className='row' >
                            <Route path="/news"
                                render={() => <News
                                    newsPage={props.state.newsPage}
                                    dispatch={props.dispatch}/>} />
                            <Route path="/profile"
                                render={() => <Profile
                                    profilePage={props.state.profilePage} />} />
                            <Route path="/dialogs"
                                render={() => <Dialogs state={props.state.dialogsPage} />} />
                        </div>
                    </div>
                </div>
            </div >
        </BrowserRouter>
    );
}

export default App;