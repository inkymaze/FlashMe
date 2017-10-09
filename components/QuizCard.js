import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../utils/styles';
import {Button} from 'react-native-elements';
import FlipCard from 'react-native-flip-card-view';

class QuizCard extends React.Component {



  // _renderFront() {
  //       // return (
  //       //     <View >
  //       //         <Text>{this.props.question[0].question}</Text>
  //       //     </View>);
  //   }
  // //Desired screen view method in back page
  //   _renderBack() {
  //       // return (
  //       //     <View >
  //       //         <Text>{this.props.question[0].answer}</Text>
  //       //     </View>);
  //   }

    _renderFront() {
       return (
           <View style={{backgroundColor: 'red',flex:1,height:100}}>
               <Text>Hello front page</Text>
           </View>);
   }
 //Desired screen view method in back page
   _renderBack() {
       return (
           <View style={{backgroundColor: 'blue',flex:1,height:100}}>
               <Text>Hello back page</Text>
           </View>);
   }


  render () {

    // console.log('quizcar question', this.props.question);
    const { onCorrect, onIncorrect, currentScore, question} = this.props;

    return (
      <View style={styles.container}>

        <Text></Text>
        <FlipCard style={{flex: 1}}
                    velocity={2} // Velocity makes it move
                    tension={5} // Slow
                    friction={1} // Oscillate a lot
                    renderFront={this._renderFront()}
                    renderBack={this._renderBack()}/>

        <Button backgroundColor="blue"
                onPress={onCorrect}
                title='Correct'/>
        <Button backgroundColor="red"
                onPress={onIncorrect}
                title='Incorrect'/>

      </View>
    );
  }
}

export default QuizCard;
