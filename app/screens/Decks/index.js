import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StatusBar } from 'react-native';

import { Button } from '../../components/Button';

import { test } from './actions';
import styles from './styles';

export class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.goToLogIn = this.goToLogIn.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(test());
  }

  goToLogIn() {
    this.props.navigation.navigate('LogIn');
  }

  goToSignUp() {
    this.props.navigation.navigate('SignUp');
  }

  render() {
    return (
      <View style={styles.home}>
        <StatusBar barStyle="light-content" />
        <View style={styles.logo}>
          <Text>holaaaaaa</Text>
        </View>
        <View style={styles.buttons}>
          <Button
            type="secondary"
            handleClick={() => this.goToSignUp()}
          >
            Sign Up
          </Button>
          <Button
            disabled={false}
            handleClick={() => this.goToLogIn()}
          >
            Log In
          </Button>
        </View>
      </View>
    );
  }
}

export default connect()(Home);
