import StyleSheets from 'react-native-extended-stylesheet';

export default StyleSheets.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 25,
  },
  pointBalance: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 19,
  },
  value: {
    fontSize: 21,
  },
  separator: {
    height: 0.5,
    width: 40,
    backgroundColor: 'gray',
    marginTop: 30,
    marginBottom: 15,
  },
});
