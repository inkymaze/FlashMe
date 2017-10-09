import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { connect } from 'react-redux';
import { white, blue } from '../utils/colors';
import { FontAwesome, Ionicons } from '@expo/vector-icons';


class DeckDetail extends React.Component {



  render() {
    const {deck} = this.props;
    let question = deck.questions.length === 1 ? 'question' : 'questions';
    console.log('deck detail props', this.props);
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{deck.title}</Text>
        <Text style={styles.question}>{deck.questions.length} {question}</Text>
        <View style={styles.detailOptions}>
          <TouchableOpacity
            style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
            onPress={() => this.props.navigation.navigate(
              'Quiz',
              { questions: deck.questions })}>
              <Text style={styles.submitBtnText}>Start Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate(
              'CardNew',
              { title: deck.title })}>
              <View style={styles.createQuestion}>
                <FontAwesome name='edit' size={30} color={ blue } />
                <Text style={styles.question}>Add Question</Text>
              </View>
          </TouchableOpacity>
        </View>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: white
  },
  title: {
    fontSize: 37,
    color: blue,
    justifyContent: "flex-start",

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
  detailOptions: {

    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',

  },
  createQuestion: {
    padding: 50,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iosSubmitBtn: {
    backgroundColor: blue,
    padding: 10,
    borderRadius: 7,
    height: 50,
    marginLeft: 40,
    marginRight: 40,
  },
  AndroidSubmitBtn: {
    backgroundColor: blue,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 50,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },

});


function mapStateToProps ({decks}, ownProps) {
  const { title } = ownProps.navigation.state.params;
  return {
    deck: decks[title]
  };
}


export default connect(mapStateToProps)(DeckDetail);
