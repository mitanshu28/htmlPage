import React, { Component } from 'react';
import logo from './logo.svg';
import nsit from './nsit.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
    <img src={nsit} className="App-logo" alt="nsit"/>
    <h1 className="App-title" >Hello!</h1>
    <h3>Welcome to login page</h3>
    <input type="email" className="field1" name="email" id="me" placeholder="E-mail Address"/>
    <br/><br/>
    <input type="password" className="field1" name="password" id="pwd" placeholder="Password"/><br/><br/>
    <input className="extend" type="submit" className="buttn" value="Login"/><br/><br/>
    <input className="check" type="checkbox"/>
    <p className="type1" >keep me logged in</p> <br/><br/>
    <center><a className="link" href="https://www.google.com">Forgot Password?</a></center>
    <div className="hello">
    </div>
      </div>
      
    );
  }
}

export default App;
