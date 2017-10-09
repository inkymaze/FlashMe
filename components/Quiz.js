import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import {connect} from 'react-redux';
import { blue, white } from '../utils/colors';
import { NavigationActions } from 'react-navigation'
import QuizCard from './QuizCard';
import QuizSummary from './QuizSummary';

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

  handleCorrect = () => {
    this.setState(prevState => ({
      correct: prevState.correct + 1,
      currentCard: prevState.currentCard + 1
    }));
    this.quizStatus();
  }

  handleIncorrect = () => {
    this.setState(prevState => ({
      incorrect: prevState.incorrect + 1,
      currentCard: prevState.currentCard + 1}));
    this.quizStatus();
  }

  quizStatus() {
    this.setState(
      { finished:
        (this.state.currentCard + 1 === this.props.questions.length)
    })
  }

  percentCorrect() {
    const totalQuestions = this.state.correct + this.state.incorrect;
    return (
      (this.state.correct / totalQuestions) * 100
    )
  }


  render () {
    const { questions, title } = this.props;
    const { correct, incorrect, currentCard, finished } = this.state;

    if (finished) return (
      <View style={styles.container}>
      <QuizSummary
        result={this.percentCorrect()}
        correct={correct}
        incorrect={incorrect}
        title={title}/>
        <TouchableOpacity
            style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
            onPress={() =>
              this.props.navigation.navigate('Quiz',
              {questions: questions,
              title: title })}>
            <Text style={styles.submitBtnText}>Restart Quiz</Text>
        </TouchableOpacity>
        <Text style={{margin: 3}}></Text>
        <TouchableOpacity
            style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
            onPress={() => this.props.navigation.navigate(
              'DeckDetail', { title: title }
           )}>
            <Text style={styles.submitBtnText}>Back to Deck</Text>
        </TouchableOpacity>
      </View>
    )



    return (
      <View style={styles.container}>

        <QuizCard
          currentScore={{correct, incorrect}}
          question={questions[currentCard]}
          questionsRemaining={questions.length - currentCard}
          onCorrect={this.handleCorrect.bind(this)}
          onIncorrect={this.handleIncorrect.bind(this)} />

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
    questions: ownProps.navigation.state.params.questions,
    title: ownProps.navigation.state.params.title
  };
}


export default connect(mapStateToProps)(Quiz)
