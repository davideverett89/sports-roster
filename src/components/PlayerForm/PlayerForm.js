import React from 'react';
import PropTypes from 'prop-types';

import './PlayerForm.scss';
import authData from '../../helpers/data/authData';

class PlayerForm extends React.Component {
  static propTypes = {
    saveNewPlayer: PropTypes.func.isRequired,
  }

  state = {
    playerName: '',
    playerImage: '',
    playerPosition: '',
  }

  savePlayer = (e) => {
    e.preventDefault();
    const { playerName, playerImage, playerPosition } = this.state;
    const { saveNewPlayer } = this.props;
    const newPlayer = {
      name: playerName,
      imageUrl: playerImage,
      position: playerPosition,
      uid: authData.getUid(),
    };
    saveNewPlayer(newPlayer);
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ playerName: e.target.value });
  }

  imageChange = (e) => {
    e.preventDefault();
    this.setState({ playerImage: e.target.value });
  }

  positionChange = (e) => {
    e.preventDefault();
    this.setState({ playerPosition: e.target.value });
  }

  render() {
    const { playerName, playerImage, playerPosition } = this.state;
    return (
      <div className="PlayerForm">
        <form className="col-6 offset-3">
            <div className="form-group">
                <label htmlFor="player-name">Name</label>
                <input
                type="text"
                className="form-control"
                id="player-name"
                placeholder="Player Name"
                value={playerName}
                onChange={this.nameChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="player-image">Player Image</label>
                <input
                type="text"
                className="form-control"
                id="player-image"
                placeholder="Player Image"
                value={playerImage}
                onChange={this.imageChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="player-position">Position</label>
                <input
                type="text"
                className="form-control"
                id="player-position"
                placeholder="Player Position"
                value={playerPosition}
                onChange={this.positionChange}
                />
            </div>
            <button className="btn btn-outline-success" onClick={this.savePlayer}>Save Player</button>
        </form>
      </div>
    );
  }
}

export default PlayerForm;
