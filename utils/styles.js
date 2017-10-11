import { white, blue, lightPurp } from './colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center'
  },
  createQuestion: {
    padding: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  incorrectBtn: {
    fontSize: 34,
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
    width: 250,

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
  flipCard: {
    flex: 1,

  },
  quizHeader: {
    fontSize: 18,
    color: blue,
    margin: 4,
    alignItems: 'center',
    alignSelf: 'center',
  },
  detailOptions: {
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 37,
    color: blue,
    justifyContent: "flex-start",
    alignItems: 'center'
  },
  cardTitle: {
    fontSize: 35,
    color: blue,
    borderBottomWidth: 3,
    borderBottomColor: blue,
  },
  question: {
    fontSize: 22,
    color: blue,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 9
  },
  addCard: {
    justifyContent: "flex-end",
    color: blue,
  },
  cardQuestion: {
    fontSize: 25,
    padding: 30,
    width: 100,
    color: blue,
    borderBottomWidth: 1,
    borderBottomColor: blue,
    justifyContent: "center",
    alignItems: "center",
  },
  answer: {
    fontSize: 23,
    flex: 1,
    color: blue,
    padding: 30,
    margin: 25,
    borderBottomColor: blue,
    justifyContent: "center",
    alignItems: "center",
  },
});
