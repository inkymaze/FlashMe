import React from 'react';
import { View,
         Text,
         Alert,
         StyleSheet,
         TouchableOpacity,
         Platform } from 'react-native';
import { connect } from 'react-redux';
import { white, blue } from '../utils/colors';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../utils/styles';

class DeckDetail extends React.Component {

  validQuiz() {
    if (this.props.deck.questions.length !== 0) {
        this.props.navigation.navigate('Quiz',
        { questions: this.props.deck.questions, title: this.props.deck.title });
    } else {
      Alert.alert("Add questions first!");
    }
  }

  render() {
    const {deck} = this.props;
    let question = deck.questions.length === 1 ? 'question' : 'questions';

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{deck.title}</Text>
        <Text style={styles.question}>{deck.questions.length} {question}</Text>
        <View style={styles.detailOptions}>
          <TouchableOpacity
            style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
            onPress={() => this.validQuiz()}>
              <Text style={styles.submitBtnText}>Start Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate(
              'CardNew',
              { title: deck.title, questions: deck.questions })}>
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

function mapStateToProps ({decks}, ownProps) {
  const { title } = ownProps.navigation.state.params;
  return {
    deck: decks[title]
  };
}

export default connect(mapStateToProps)(DeckDetail);
