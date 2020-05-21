import React from 'react';
import './Auth.scss';

import firebase from 'firebase/app';
import 'firebase/auth';

class Auth extends React.Component {
    loginClickEvent = (e) => {
      e.preventDefault();
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
    }

    render() {
      return (
        <div className="Auth m-auto">
            <button className="btn auth-btn m-5" onClick={this.loginClickEvent}>Google Login<i className="mx-2 fab fa-google fa-2"></i></button>
        </div>
      );
    }
}

export default Auth;
