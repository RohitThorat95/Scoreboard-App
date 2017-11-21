import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';
import Stopwatch from './Stopwatch';
import './App.css';

class Header extends Component {
  render(){
    return(
      <div className="header">
        <Stats playersTotal={this.props.playerHead}/>
        <h1>{this.props.titleHeader}</h1>
        <Stopwatch />
      </div>
    );
    }
  }

  Header.propTypes = {
    titleHeader: PropTypes.string,
    playerHead: PropTypes.array.isRequired
  };

  export default Header;
