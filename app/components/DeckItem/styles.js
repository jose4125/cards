import StyleSheets from 'react-native-extended-stylesheet';

export default StyleSheets.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 25,
  },
  titleContainer: {
    flexDirection: 'row',
    marginBottom: 3,
    alignItems: 'center',
  },
  tag: {
    backgroundColor: 'gray',
    paddingHorizontal: 2,
    paddingVertical: 2,
    borderRadius: 3,
    marginRight: 5,
  },
  multiplier: {
    fontSize: 12,
  },
  title: {
    fontSize: 14,
  },
  pointsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  info: {
    fontSize: 12,
    color: 'gray',
  },
  points: {
    fontSize: 19,
  },
  separator: {
    height: 0.5,
    width: '100%',
    backgroundColor: 'gray',
    marginTop: 12,
  },
});
