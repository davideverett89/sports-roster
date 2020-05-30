import React from 'react';
import PropTypes from 'prop-types';

import './PlayerForm.scss';
import authData from '../../helpers/data/authData';

class PlayerForm extends React.Component {
  static propTypes = {
    saveNewPlayer: PropTypes.func.isRequired,
    player: PropTypes.object.isRequired,
    putPlayer: PropTypes.func.isRequired,
    closeForm: PropTypes.func.isRequired,
  }

  state = {
    playerName: '',
    playerImage: '',
    playerPosition: '',
    isEditing: false,
  }

  componentDidMount() {
    const { player } = this.props;
    if (player.name) {
      this.setState({
        playerName: player.name,
        playerImage: player.imageUrl,
        playerPosition: player.position,
        isEditing: true,
      });
    }
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

  updatePlayer = (e) => {
    e.preventDefault();
    const { playerName, playerImage, playerPosition } = this.state;
    const { player, putPlayer } = this.props;
    const updatedPlayer = {
      name: playerName,
      imageUrl: playerImage,
      position: playerPosition,
      uid: authData.getUid(),
    };
    putPlayer(player.id, updatedPlayer);
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
    const {
      playerName,
      playerImage,
      playerPosition,
      isEditing,
    } = this.state;
    const { closeForm } = this.props;
    return (
      <div className="PlayerForm my-3">
        <form className="py-3 col-6 offset-3 card d-flex flex-column justify-content-center">
            <div className="form-header d-flex flex-row justify-content-start">
              <button className="btn form-close-btn" onClick={closeForm}><i className="fas fa-times"></i></button>
            </div>
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
            <div className="form-footer">
            {
              isEditing
                ? <button className="btn btn-outline-success" onClick={this.updatePlayer}>Update Player</button>
                : <button className="btn btn-outline-success" onClick={this.savePlayer}>Save Player</button>
            }
            </div>
        </form>
      </div>
    );
  }
}

export default PlayerForm;
