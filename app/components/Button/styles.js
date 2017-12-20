import StyleSheets from 'react-native-extended-stylesheet';

export default StyleSheets.create({
  default: {
    padding: 20,
    backgroundColor: '$BuzzDarkBlue',
  },
  text: {
    color: '$BuzzWhite',
    fontSize: 21,
    fontWeight: '500',
    textAlign: 'center',
  },
  secondary: {
    backgroundColor: '$BuzzLightBlue',
  },
  error: {
    backgroundColor: '$BuzzLightRed',
  },
});
