import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/login-form';
import env from './env.js';

class App extends Component {
  constructor(props) {
    super(props);

    firebase.initializeApp({
      apiKey: env.apiKey,
      authDomain: env.authDomain,
      databaseURL: env.databaseURL,
      projectId: env.projectId,
      storageBucket: env.storageBucket,
      messagingSenderId: env.messagingSenderId,
    });
  }

  render() {
    return (
      <View>
        <Header text='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

export default App;
