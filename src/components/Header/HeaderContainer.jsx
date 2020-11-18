import React from 'react';
import Header from './../Header/Header';
import { connect } from 'react-redux';
import { getMyInfo } from './../../redux/auth-reducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getMyInfo();
  }

  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

export default connect(mapStateToProps, { getMyInfo })(HeaderContainer);