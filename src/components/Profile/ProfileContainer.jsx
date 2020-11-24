import React from 'react';
import {connect} from 'react-redux';
import {getProfile, getStatus, updateStatus} from '../../redux/profile-reducer';
import Profile from './Profile';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getProfile(userId);
        //setTimeout(() => {
        this.props.getStatus(userId);
        //}, 1000);
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
});

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);