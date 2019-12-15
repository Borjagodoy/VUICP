import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import Header from './components/Header.js';
import LoginScreen from './components/LoginScreen.js';
import Session from './components/Session';
import Project from './components/Project.js';
import Google from './components/Google.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        user: false
    }
    this.handleUser = this.handleUser.bind(this);
  }

  handleUser(){
    this.setState({user: !this.state.user});
  }

  render(){
    return (
      <div className="App">
        <Header user = {this.state.user} handleUser = {this.handleUser}/>
        <Router>
          {this.state.user ? <Redirect to="/user"/> : <Redirect to="/"/>}
          <Route exact path="/">
             <LoginScreen handleUser = {this.handleUser}/>
          </Route> 
          <Route exact path="/user" component={Session}/>
          <Route exact path="/user/project" component={Project}/>
          <Route path="/auth/google/callback" component={Google}></Route>
        </Router>
      </div>
    )
  }
}

export default App;
