import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';

import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.onButtonPress = this.onButtonPress.bind(this);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLoginFail = this.onLoginFail.bind(this);

    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false,
    };
  }

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({
      error: '',
      loading: true,
    });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => {
        //wrong credentials, try to setup account if fail then means wrong password
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)
          .catch(this.onLoginFail);
      });
  }

  onLoginFail() {
    this.setState({
      error: 'Authentication failed',
      loading: false,
    });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
    });
  }

  renderButton() {
    return (
      this.state.loading ?
        <Spinner size='small' /> :
        <Button
          onPress={this.onButtonPress}
        >
          Login
        </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
            label='Email'
            placeholder='me@domain.com'
          />
        </CardSection>
        <CardSection>
          <Input
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            label='Password'
            placeholder='password'
            secureTextEntry
          />
        </CardSection>
        <Text style={styles.errorText}>
          {this.state.error}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorText: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#ff0000',
  },
};

export default LoginForm;
