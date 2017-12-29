import StyleSheets from 'react-native-extended-stylesheet';

export default StyleSheets.create({
  title: {
    fontSize: 40,
    fontWeight: '400',
    textAlign: 'center',
  },
  infoContainer: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  status: {
    fontSize: 20,
    marginTop: 10,
  },
});
