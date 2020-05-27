import React from 'react';

import './PlayerForm.scss';

class PlayerForm extends React.Component {
  render() {
    return (
      <div className="PlayerForm">
        <form className="col-6 offset-3">
            <div className="form-group">
                <label htmlFor="player-name">Name</label>
                <input type="text" className="form-control" id="player-name" placeholder="Player Name" />
            </div>
            <div className="form-group">
                <label htmlFor="player-image">Player Image</label>
                <input type="text" className="form-control" id="player-image" placeholder="Player Image" />
            </div>
            <div className="form-group">
                <label htmlFor="player-position">Position</label>
                <input type="text" className="form-control" id="player-position" placeholder="Player Position" />
            </div>
        </form>
      </div>
    );
  }
}

export default PlayerForm;
