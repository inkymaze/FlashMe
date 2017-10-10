import React from 'react';
import { View,
        Text,
        StyleSheet,
        TouchableOpacity,
        ScrollView } from 'react-native';
import styles from '../utils/styles';
import {Button} from 'react-native-elements';
import FlipCard from 'react-native-flip-card-view';

class QuizCard extends React.Component {

  _renderFront() {
    return (
      <View style={styles.quizCard}>
        <Text style={[styles.cardtext, {fontWeight: 'bold'}]}>Question:</Text>
        <Text style={styles.cardtext}>
          {this.props.question}
        </Text>
        <Text style={[styles.cardtext]}>
         (tap to show answer)
        </Text>
      </View>
    );
  }

   _renderBack() {
     return (
      <View style={styles.quizCard}>
        <Text style={[styles.cardtext, {fontWeight: 'bold'}]}>Answer:</Text>
        <Text style={styles.cardtext}>{this.props.answer}</Text>
      </View>
    );
   }

  render () {

    const { onCorrect, onIncorrect,
      currentScore, question, questionsRemaining
      } = this.props;

    return (
      <View style={styles.container}>
        <FlipCard style={styles.flipCard}
                    velocity={2}
                    tension={5}
                    friction={1}
                    renderFront={this._renderFront()}
                    renderBack={this._renderBack()}/>
        <View style={{flexDirection: 'row'}}>
          <Button backgroundColor="green"
                  raised
                  onPress={onCorrect}
                  title='Correct'/>
          <Button backgroundColor="red"
                  raised
                  onPress={onIncorrect}
                  title='Incorrect'/>
        </View>
        <Text style={styles.quizHeader}>
          {currentScore.correct} correct / {currentScore.incorrect} incorrect
        </Text>
        <Text style={styles.quizHeader}>
          -- {questionsRemaining} question(s) left --
        </Text>
      </View>
    );
  }
}

export default QuizCard;
