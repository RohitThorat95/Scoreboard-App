import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class AddPlayerForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: ''
    };
    }
  onNameChange(e) {
    this.setState({name: e.target.value});
  }

  onSubmitForm(e) {
    e.preventDefault();
    this.props.onAdd(this.state.name);
    this.setState({name: ''});

  }
  render(){
    return(
      <div className="add-player-form">
         <form onSubmit={this.onSubmitForm.bind(this)}>
           <input type="text" value={this.state.name} placeholder="Add Player Here" onChange={this.onNameChange.bind(this)}/>
           <input type="submit" value="Add Player"/>
         </form>
      </div>
    );
    }
  }
  AddPlayerForm.propTypes = {
    onAdd: PropTypes.func.isRequired
  }

  export default AddPlayerForm;
