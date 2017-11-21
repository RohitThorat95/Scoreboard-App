import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class Stats extends Component {
  render(){
    var totalPlayers = this.props.playersTotal.length;
    var totalPoints = this.props.playersTotal.reduce(function(total,p){
      return total + p.score;
    },0);
    return(
      <table className="stats">
        <tbody>
          <tr>
            <td>Players:</td>
            <td>{totalPlayers}</td>
          </tr>
          <tr>
            <td>Total Points:</td>
            <td>{totalPoints}</td>
          </tr>
        </tbody>
      </table>
    );
    }
  }

  Stats.propTypes = {
    playersTotal: PropTypes.array.isRequired
  }

  export default Stats;
