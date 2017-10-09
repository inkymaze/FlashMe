import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import {connect} from 'react-redux';
import { blue, white } from '../utils/colors';
import { NavigationActions } from 'react-navigation'
import QuizCard from './QuizCard';
// import { AppLoading} from 'expo'

function SubmitBtn ({ onPress }) {
  return (
    <TouchableOpacity
      style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
      onPress={onPress}>
        <Text style={styles.submitBtnText}>Restart Quiz</Text>
    </TouchableOpacity>
  );
}

class Quiz extends React.Component {
  state = {
    currentCard: 0,
    correct: 0,
    incorrect: 0,
    finished: false

  }
  static navigationOptions = {
    title: 'Quiz'
  };



  restartQuiz = () => {
    // reset score
    // sbuffle cards?
    //
  }
  //
  // backToDeck = () => {
  //   this.props.navigation.navigate(
  //     'DeckDetail', { title: item.title })
  // }

  renderCards = () => {

  }

  handleCorrect = () => {

  }

  handleIncorrect = () => {

  }


  render () {
    console.log('quiz state', this.state);
    const { questions } = this.props;
    const { correct, incorrect, currentCard, finished } = this.state;



    return (
      <View>
        <Text>Quiz FORM </Text>
        <QuizCard
          
          question={questions[currentCard]}
          onCorrect={this.handleCorrect}
          onIncorrect={this.handleIncorrect} />



        <SubmitBtn onPress={this.restartQuiz}  />



      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
    justifyContent: 'flex-end',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
  },
})



function mapStateToProps (state, ownProps) {
  return {
    questions: ownProps.navigation.state.params.questions
  };
}


export default connect(mapStateToProps)(Quiz)
