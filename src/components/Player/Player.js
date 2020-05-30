import React from 'react';
import PropTypes from 'prop-types';
import './Player.scss';

import playerShape from '../../helpers/propz/playerShape';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
    removePlayer: PropTypes.func.isRequired,
    editAPlayer: PropTypes.func.isRequired,
  }

  deletePlayerEvent = (e) => {
    e.preventDefault();
    const { player, removePlayer } = this.props;
    removePlayer(player.id);
  }

  editPlayerEvent = (e) => {
    e.preventDefault();
    const { player, editAPlayer } = this.props;
    editAPlayer(player);
  }

  render() {
    const { player } = this.props;

    return (
        <div className="Player col-3">
            <div className="card player-card">
              <div className="card-header player-card-header d-flex flex-row justify-content-between">
                <button className="btn player-delete-button" onClick={this.deletePlayerEvent}><i className="fas fa-times"></i></button>
                <button className="btn player-edit-button" onClick={this.editPlayerEvent}><i className="fas fa-edit"></i></button>
              </div>
                <img className="card-img-top player-img img-fluid" src={player.imageUrl} alt={player.name} />
                <div className="card-body player-card-body d-flex flex-column justify-content-center">
                    <h5 className="p-2 card-title player-name">{player.name}</h5>
                    <p className="m-2 card-text">{player.position}</p>
                </div>
            </div>
        </div>
    );
  }
}

export default Player;
