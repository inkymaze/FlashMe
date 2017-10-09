import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { blue } from '../utils/colors';
import styles from '../utils/styles';

class QuizSummary extends React.Component {

render() {
  const { correct, incorrect, title, result } = this.props;

  return (
      <View style={styles.container}>
        <Text style={[styles.center, {color: blue}, {fontSize: 29}]}>
          {correct} correct answer(s)
        </Text>
        <Text style={[styles.center, {color: blue}, {fontSize: 29}]}>
          {incorrect} incorrect answer(s)
        </Text>
        <Text style={[styles.center, {color: blue}, {fontSize: 32}]}>
          {result}% correct
        </Text>
      </View>
    );
  }
}

export default QuizSummary;
