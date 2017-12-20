import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StatusBar } from 'react-native';

import { Button } from '../../components/Button';

//import styles from './styles';

export class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.goToLogIn = this.goToLogIn.bind(this);
  }
  componentDidMount() {
    //this.props.dispatch(test());
  }
  
  goToLogIn() {
    this.props.navigation.navigate('LogIn');
  }
  
  goToSignUp() {
    this.props.navigation.navigate('SignUp');
  }
  
  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" />
        <View>
          <Text>holaaaaaa</Text>
        </View>
      </View>
    );
  }
}

export default connect()(Home);
