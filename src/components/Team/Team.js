import React from 'react';
import './Team.scss';

import moment from 'moment';
import playersData from '../../helpers/data/playersData';
import authData from '../../helpers/data/authData';

import Player from '../Player/Player';
import PlayerForm from '../PlayerForm/PlayerForm';

class Team extends React.Component {
  state = {
    players: [],
    formOpen: false,
  }

  getPlayers = () => {
    playersData.getPlayersByUid(authData.getUid())
      .then((players) => this.setState({ players }))
      .catch((err) => console.error('There is a problem with getting the players:', err));
  }

  saveNewPlayer = (newPlayer) => {
    playersData.savePlayer(newPlayer)
      .then(() => {
        this.getPlayers();
        this.setState({ formOpen: false });
      })
      .catch((err) => console.error('There is a problem with creating a new player:', err));
  }

  componentDidMount() {
    this.getPlayers();
  }

  removePlayer = (playerId) => {
    playersData.deletePlayer(playerId)
      .then(() => this.getPlayers())
      .catch((err) => console.error('There was a problem with deleting a player:', err));
  }

  render() {
    const { players, formOpen } = this.state;
    const makePlayerCards = players.map((singlePlayer) => <Player key={singlePlayer.id} player={singlePlayer} removePlayer={this.removePlayer} />);
    return (
        <div className="Team">
            <h1 className="p-2 display-4 time-header">{moment().format('L')}</h1>
            <h2 className="m-2">Today's Starting Roster</h2>
            <button className="btn new-player-btn" onClick={() => this.setState({ formOpen: true })}>Add New Player</button>
            { formOpen ? <PlayerForm saveNewPlayer={this.saveNewPlayer} /> : ''}
            <div className="d-flex flex-wrap justify-content-center align-content-center">
                {makePlayerCards}
            </div>
        </div>
    );
  }
}

export default Team;
