import { white, blue, lightPurp } from './colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  iosSubmitBtn: {
    backgroundColor: blue,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
  },
  quizCard: {
    height: 100,
    flex: 1,
    backgroundColor: white,
    borderWidth: 2.5,
    borderRadius: 7,

    margin: 10,
    borderColor: lightPurp
  },
  AndroidSubmitBtn: {
    backgroundColor: blue,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  answerBtn: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 9,
  },
  questionBtn: {
    backgroundColor: blue,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
  },

  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginLeft: 30,
    marginRight: 30,
  },
  cardtext: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    marginLeft: 5,
    marginRight: 5,
    fontSize: 24,
    color: blue,
    marginBottom: 0
  },
  quizHeader: {
    fontSize: 18,
    color: blue,
    margin: 4,
    alignItems: 'center',
    alignSelf: 'center',
  }
});
