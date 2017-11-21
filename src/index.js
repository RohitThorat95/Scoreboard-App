import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import Application from './Application';
import registerServiceWorker from './registerServiceWorker';

var PLAYERS = [
  {
    name: "Player 1",
    score: 0,
    id: 1
  },

]


ReactDOM.render(<Application initialPlayers={PLAYERS}/>, document.getElementById('root'));
registerServiceWorker();
