import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { getConsumer } from './actions';

export class Consumer extends React.PureComponent {

  componentDidMount() {
    this.props.getConsumer();
  }

  render() {
    return (
      <View>
        {this.props.children}
      </View>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    getConsumer: () => dispatch(getConsumer()),
  };
}

export default connect(null, mapDispatchToProps)(Consumer);
