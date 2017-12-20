import StyleSheets from 'react-native-extended-stylesheet';

export default StyleSheets.create({
  form: {
    paddingLeft: 25,
    paddingRight: 25,
  },
  finantial: {
    backgroundColor: '$BuzzExtraLightBlue',
    height: '37%',
    paddingVertical: 10,
  },
  headline: {
    color: '$BuzzWhite',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 25,
    marginBottom: 10,
  },
  finantialItem: {
    backgroundColor: '$BuzzExtraLightBlue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  finantialText: {
    color: '$BuzzWhite',
    fontSize: 20,
  },
});
