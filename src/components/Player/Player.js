import React from 'react';

import './Player.scss';

import playerShape from '../../helpers/propz/playerShape';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
  }

  render() {
    const { player } = this.props;

    return (
        <div className="Player col-3">
            <div class="card player-card">
                <img class="card-img-top player-img" src={player.imageUrl} alt={player.name} />
                <div class="card-body player-card-body d-flex flex-column justify-content-center">
                    <h5 class="p-2 card-title player-name">{player.name}</h5>
                    <p class="m-2 card-text">{player.position}</p>
                </div>
            </div>
        </div>
    );
  }
}

export default Player;
