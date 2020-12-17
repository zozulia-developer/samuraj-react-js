import React from 'react';
import './App.css';
import './style/reset.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Sidebar from './components/Sidebar/Sidebar';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import News from './components/News/News';
import {Route, withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/preloader";
import {withSuspense} from "./hoc/withSuspenseRedirect";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }

    return (
      <div className='wrapper'>
        <Sidebar/>
        <HeaderContainer/>
        <div id='content-page' className='content-page'>
          <div className="container">
            <div className='row'>
              <Route path="/news"
                     render={() => <News/>}/>
              <Route path="/profile/:userId?"
                     render={withSuspense(ProfileContainer)}/>
              <Route path="/dialogs"
                     render={withSuspense(DialogsContainer)}/>
              <Route path="/users"
                     render={() => <UsersContainer/>}/>
              <Route path="/login"
                     render={() => <Login/>}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({initialized: state.app.initialized})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);