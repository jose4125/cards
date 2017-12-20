import React from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { createStructuredSelector } from "reselect";

import { getActivities } from './actions';
import { makeSelectActivities } from './selectors';
import { ActivityItem } from '../../components/ActivityItem';
import {sendLogIn} from "../../screens/LogIn/actions";



export class ActivityList extends React.PureComponent {

  componentDidMount() {
    this.props.getActivities();
  }

  renderActivityItem(item) {
    return (<ActivityItem data={item} />)
  }
  render() {
    return (
      <FlatList
        renderItem={({ item }) => this.renderActivityItem(item)}
        data={this.props.activities}
        //keyExtractor={item => item.id}
      />
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    getActivities: () => dispatch(getActivities()),
  };
}

const mapStateToProps = createStructuredSelector({
  activities: makeSelectActivities(),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActivityList);
