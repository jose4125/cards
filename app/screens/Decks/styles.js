import StyleSheets from 'react-native-extended-stylesheet';

export default StyleSheets.create({
  home: {
    flex: 1,
    backgroundColor: '$BuzzBlue',
  },
  logo: {
    display: 'flex',
    marginTop: '40%',
    alignItems: 'center',
  },
  buttons: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});
