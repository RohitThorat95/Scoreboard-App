import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class Counter extends Component {
  // constructor(props){
  //   super(props);
  //
  //   this.state = {
  //     scoreC: this.props.initialScore,
  //   };
  //   }
  //
  //   incrementScore(e) {
  //     // console.log("increment ",e);
  //     this.setState({
  //       scoreC: (this.state.scoreC + 1)
  //     });
  //   }
  //
  //   decrementScore(e) {
  //     // console.log("increment ",e);
  //     this.setState({
  //       scoreC: (this.state.scoreC - 1)
  //     });
  //   }

  render(){
    return(
      <div className="counter">
        <button className="counter-action decrement" onClick={function(){this.props.onChange(-1);}.bind(this)}>-</button>
          <div className="counter-score">
            {this.props.scoreC}
          </div>
        <button className="counter-action increment" onClick={function(){this.props.onChange(1);}.bind(this)}>+</button>
      </div>
    );
    }
  }
  Counter.propTypes = {
    scoreC: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
  }


export default Counter;
