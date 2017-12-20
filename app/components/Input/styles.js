import StyleSheets from 'react-native-extended-stylesheet';

export default StyleSheets.create({
  default: {
    borderBottomColor: '#ccc', // TODO change to a variable
    borderBottomWidth: 1,
    color: '$BuzzBlack', // TODO change to a variable
    fontSize: 13,
    paddingBottom: 7,
    paddingTop: 7,
    width: '100%',
  },
  secondary: {
    fontSize: 25,
    paddingBottom: 10,
    paddingTop: 10,
  },
});