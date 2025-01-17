import React from 'react';
import Header from './../Header/Header';
import {connect} from 'react-redux';
import {logout} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, {logout})(HeaderContainer);