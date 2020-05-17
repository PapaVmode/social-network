import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.1/auth/me', {
      withCredentials: true
    })
      .then(response => {
        if(response.data.resultCode === 0){
          this.props.setAuthUserData(response.data.data);
        }
      });
  }
  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer); 