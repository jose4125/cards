import StyleSheets from 'react-native-extended-stylesheet';
import { StatusBar } from 'react-native';

export default StyleSheets.create({
  container: {
    paddingLeft: 25,
    '@media ios': {
      paddingTop: 25,
    },
    '@media android': {
      paddingTop: StatusBar.currentHeight,
    },
  },
  icon: {
    width: 18,
  },
});
