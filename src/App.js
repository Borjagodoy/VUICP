import React from 'react';
import './App.css';

import Header from './components/Header.js';
import LoginScreen from './components/LoginScreen.js';
import Session from './components/Session';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        user: false
    }
    this.handleUser = this.handleUser.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
  }

  handleUser(){
    this.setState({user: true});
  }

  renderLogin(){
    if(this.state.user === true) {
      return (
        <Session/>
      )
    } else {
      return (
        <LoginScreen handleUser = {this.handleUser}/>
      )
    }
  }

  render(){
    return (
      <div className="App">
        <Header user = {this.state.user}/>
        { this.renderLogin() }
      </div>
    )
  }
}

export default App;
