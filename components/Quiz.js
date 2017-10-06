import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import {connect} from 'react-redux';
import { blue, white } from '../utils/colors';
import { NavigationActions } from 'react-navigation'

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
    correct: 0,
    incorrect: 0,
    
  }



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



  render () {
    console.log('quiz props', this.props);
    return (
      <View>
        <Text>Quiz FORM </Text>

        <SubmitBtn onPress={this.restartQuiz}  />

        <TouchableOpacity style={styles.deck}
          onPress={() =>
            this.props.navigation.dispatch(NavigationActions.back({key: 'DeckDetail'})
         )}>
            <Text >Back to Deck</Text>

        </TouchableOpacity>

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




export default Quiz;
