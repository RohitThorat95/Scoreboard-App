import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import './App.css';

class Player extends Component {
  render(){
    return(
      <div className="player">

          <div className="player-name">
            <a className="remove-player" onClick={this.props.onRemove.bind(this)}>X</a>
            {this.props.name}
          </div>

          <div className="player-score">
            <Counter scoreC={this.props.scoreP} onChange={this.props.onScoreChange}/>
          </div>

      </div>
    );
    }
  }
  Player.propTypes = {
    name: PropTypes.string.isRequired,
    scoreP: PropTypes.number.isRequired,
    onScoreChange: PropTypes.func.isRequired,
    onRemove:PropTypes.func.isRequired
  }


  export default Player;
