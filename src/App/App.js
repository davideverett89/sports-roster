import React from 'react';
import './App.scss';

import firebase from 'firebase/app';
import 'firebase/auth';

import NavBar from '../components/NavBar/NavBar';
import Auth from '../components/Auth/Auth';
import Team from '../components/Team/Team';

import fbConnection from '../helpers/data/connection';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;

    const loadComponent = () => {
      let componentToLoad = '';
      if (authed) {
        componentToLoad = <Team />;
      } else {
        componentToLoad = <Auth />;
      }
      return componentToLoad;
    };

    return (
      <div className="App text-white">
        <NavBar authed={authed}/>
        {loadComponent()}
      </div>
    );
  }
}

export default App;
