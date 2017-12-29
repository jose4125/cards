import React from 'react';
import StyleSheets from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';
import {
  setLocalNotification,
} from './utils/notifications';

import Navigator from './config/routes';
import store from './config/store';
import styles from './config/styles';

StyleSheets.build(styles);

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
