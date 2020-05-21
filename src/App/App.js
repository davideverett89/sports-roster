import React from 'react';
import './App.scss';

import NavBar from '../components/NavBar/NavBar';
import Auth from '../components/Auth/Auth';
import Team from '../components/Team/Team';

class App extends React.Component {
  render() {
    return (
      <div className="App text-white">
        <NavBar />
        <Auth />
        <Team />
      </div>
    );
  }
}

export default App;
