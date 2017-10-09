import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Card, CardSection, Spinner } from './components/common';
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

    this.state = { loggedIn: null };
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
    case true:
      return (
        <Card>
          <CardSection>
            <Button
              onPress={() => firebase.auth().signOut()}
            >
              Log Out
            </Button>
          </CardSection>
        </Card>
      );
    case false:
      return <LoginForm />;
    case null:
      return (
        <View style={styles.spinner}>
          <Spinner />
        </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.app}>
        <Header text='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  app: {
    flex: 1,
  },
  spinner: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
  },
};

export default App;
