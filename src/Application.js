import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';
import './App.css';

var nextkey = 4;

class Application extends Component {

  constructor(props){
    super(props);

    this.state = {
      playerState: this.props.initialPlayers
    };
  }

onScoreChangeApp(index,delta) {
   // console.log("onScoreChangeApp",index,delta);
   this.state.playerState[index].score += delta;
   this.setState(this.state);
}

onPlayerAdd(name) {

  console.log("name added",name);
  this.state.playerState.push({
    name: name,
    score: 0,
    id: nextkey,
  });
  this.setState(this.state);
  nextkey += 1;
}

onRemovePlayer(index){
  // console.log("remove" ,index);
  this.state.playerState.splice(index, 1);
  this.setState(this.state);
}

render(){

    return(
      <div className="scoreboard">
         <Header titleHeader={this.props.titleApp} playerHead={this.props.initialPlayers}/>
           <div className="players">

             {this.state.playerState.map(function(p,index) {
              return (
              <Player onScoreChange={function(delta) {this.onScoreChangeApp(index,delta)}.bind(this)}
                      onRemove={function(){this.onRemovePlayer(index)}.bind(this)}
                      name={p.name}
                      scoreP={p.score}
                      key={p.id} />
              );
            }.bind(this))}

          </div>
          <AddPlayerForm onAdd={this.onPlayerAdd.bind(this)}/>
      </div>
    );
    }
  }
  Application.propTypes = {
    titleApp: PropTypes.string,
    initialPlayers: PropTypes.arrayOf(
      PropTypes.shape({
                        name: PropTypes.string.isRequired,
                        score: PropTypes.number.isRequired,
                        id: PropTypes.number.isRequired
                     })).isRequired

  };
  Application.defaultProps = {
    titleApp: "Scoreboard",

  };


export default Application;
