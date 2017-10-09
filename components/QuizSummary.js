import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { blue } from '../utils/colors';
import styles from '../utils/styles';

class QuizSummary extends React.Component {




render() {
  const { correct, incorrect, title, result } = this.props;
  console.log('quiz sum', this.props);
  return (
      <View style={styles.container}>
        <Text style={[styles.center, {color: blue}, {fontSize: 29}]}>
          {correct} correct answer(s)
        </Text>
        <Text style={[styles.center, {color: blue}, {fontSize: 29}]}>
          {incorrect} incorrect answer(s)
        </Text>
        <Text style={[styles.center, {color: blue}, {fontSize: 32}]}>
          You got {result}% correct
        </Text>

        <TouchableOpacity
                          >
          <Text style={styles.submitBtnText}>Restart</Text>
        </TouchableOpacity>




      </View>
    );
  }
}

export default QuizSummary;
