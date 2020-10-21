import React from 'react';
import './App.css';
import './reset.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper' >
                <Header />
                <Navbar />
                <div className='app-wrapper-content' >
                    <Route path="/profile" 
                            render={ () => <Profile state={props.state.profilePage}/> } />
                    <Route path="/dialogs" 
                            render={ () => <Dialogs state={props.state.dialogsPage}/> } />
                    <Route path="/news" 
                            component={News} />
                </div>
            </div >
        </BrowserRouter>
    );
}

export default App;