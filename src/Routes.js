import React, { Component } from 'react';
import { Scene, Router, } from 'react-native-router-flux'
import Singup from './signup'
// import SignIn from './signin'
import Home from './home'
import Menu from './menu'
import firebase from 'firebase'

  var config = {
    apiKey: "AIzaSyBqvSxmDUByeIiGNdnLHw7TDcqLuMxIdDg",
    authDomain: "studenttutor-3aaf9.firebaseapp.com",
    databaseURL: "https://studenttutor-3aaf9.firebaseio.com",
    projectId: "studenttutor-3aaf9",
    storageBucket: "studenttutor-3aaf9.appspot.com",
    messagingSenderId: "129048941479"
  };
  firebase.initializeApp(config);

class Route extends Component {
  render() {
    return (
      <Router>
        <Scene>
          {/* <Scene key='SignIn' component={SignIn} hideNavBar={true} /> */}
          <Scene key='Singup' component={Singup} hideNavBar={true} />
          <Scene key='Home' component={Home} hideNavBar={true} />
          <Scene key='Menu' component={Menu} hideNavBar={true} />
        </Scene>
      </Router>
    )
  }
}

export default Route