import StyleSheets from 'react-native-extended-stylesheet';

export default StyleSheets.create({
  container: {
    flex: 1,
    height: 90,
    borderBottomColor: '$CardsBlack',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: '400',
  },
  info: {
    fontSize: 12,
    color: '$CardsGray',
  },
});
