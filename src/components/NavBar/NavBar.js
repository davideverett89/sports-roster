/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';

import './NavBar.scss';

class NavBar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;

    return (
        <div className="NavBar">
            <nav className="navbar navbar-expand-lg navbar-light sports-roster-nav">
                <a className="navbar-brand text-white" href="https://www.mlb.com/cardinals">St Louis Cardinals</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i className="fas fa-baseball-ball"></i></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            {
                                authed
                                  ? <button className="nav-link btn logout-btn" onClick={this.logMeOut}>Logout</button>
                                  : ''
                            }
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
  }
}

export default NavBar;
