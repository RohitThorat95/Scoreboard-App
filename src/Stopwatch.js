import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class Stopwatch extends Component {
  constructor(props){
    super(props);

    this.state = {
      running: false,
      elapsedTime: 0,
      previousTime: 0,
    };
    }
    componentDidMount(){
       this.interval = setInterval(this.onTick.bind(this),100);
    }

    componentWillUnmount(){
      clearInterval(this.interval);
    }

    onTick() {
      if(this.state.running){
        var now = Date.now();
        this.setState({
          previousTime: now,
          elapsedTime : this.state.elapsedTime + (now - this.state.previousTime),
        });
      }
      // console.log('onTick');
    }

    onStart(){
      this.setState({
        running: true,
        previousTime: Date.now(),
      });
    }

    onStop(){
      this.setState({running: false});
    }

    onReset(){
        this.setState({
          elapsedTime: 0 ,
          previousTime: Date.now()
        });
    }

  render(){
    var seconds = Math.floor(this.state.elapsedTime / 1000);
    return(
      <div className="stopwatch">
        <h2>Stopwatch</h2>
          <div className="stopwatch-time">{seconds}</div>
          {this.state.running ? <button onClick={this.onStop.bind(this)}>Stop</button> : <button onClick={this.onStart.bind(this)}>Start</button>}
          <button onClick={this.onReset.bind(this)}>Reset</button>

      </div>
    );
    }
  }

  export default Stopwatch;
