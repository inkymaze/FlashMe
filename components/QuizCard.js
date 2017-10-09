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
         <Text style={styles.cardtext}>
            {this.props.question[0].question}
         </Text>
         <Text style={[styles.cardtext, {justifyContent: 'flex-end'}]}>
          (tap to show answer)
         </Text>
       </View>
     );
   }

   _renderBack() {
     return (
       <View style={styles.quizCard}>
           <Text style={styles.cardtext}>{this.props.question[0].answer}</Text>
       </View>
     );
   }

  render () {
    const { onCorrect, onIncorrect,
      currentScore, question, questionsRemaining
      } = this.props;

    return (
      <View style={styles.container}>



        <FlipCard style={{flex: 1}}
                    velocity={2} // Velocity makes it move
                    tension={5} // Slow
                    friction={1} // Oscillate a lot
                    renderFront={this._renderFront()}
                    renderBack={this._renderBack()}/>

        <Button backgroundColor="green"
                raised
                onPress={onCorrect}
                title='Correct'/>
        <Button backgroundColor="red"
                raised
                onPress={onIncorrect}
                title='Incorrect'/>
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
