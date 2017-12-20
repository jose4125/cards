import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { makeSelectPoints } from './selectors';
import styles from './styles';

class PointBalance extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.pointBalance}>
          <Text style={styles.title}>Points Balance</Text>
          <Text style={styles.value}>{this.props.points}</Text>
        </View>
        <View style={styles.separator} />
      </View>
    );
  }
}

PointBalance.propTypes = {};

const mapStateToProps = createStructuredSelector({
  points: makeSelectPoints(),
});

export default connect(mapStateToProps)(PointBalance);
