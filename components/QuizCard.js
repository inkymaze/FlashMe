import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import styles from '../utils/styles';


class QuizCard extends React.Component {


  render () {
    console.log('quizcard props', this.props);
    return (
      <View style={styles.container}>
        <Text>Quiz card test</Text>
      </View>
    );
  }
}

export default QuizCard;
