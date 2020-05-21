import React from 'react';
import './Team.scss';

import moment from 'moment';
import playersData from '../../helpers/data/playersData';
import authData from '../../helpers/data/authData';

import Player from '../Player/Player';

class Team extends React.Component {
  state = {
    players: [],
  }

  componentDidMount() {
    playersData.getPlayersByUid(authData.getUid())
      .then((players) => this.setState({ players }))
      .catch((err) => console.error('There is a problem with getting the players:', err));
  }

  render() {
    const { players } = this.state;
    const makePlayerCards = players.map((singlePlayer) => <Player key={singlePlayer.id} player={singlePlayer} />);
    return (
        <div className="Team">
            <h1 className="p-2 display-4 time-header">{moment().format('L')}</h1>
            <h2 className="m-2">Today's Starting Roster</h2>
            <div className="d-flex flex-wrap justify-content-center align-content-center">
                {makePlayerCards}
            </div>
        </div>
    );
  }
}

export default Team;
