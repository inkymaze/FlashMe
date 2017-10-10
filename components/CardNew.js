import React from 'react';
import {View, Text, StyleSheet, Dimensions,
  TouchableOpacity, TextInput, Platform, KeyboardAvoidingView} from 'react-native';
import { Button, FormValidationMessage } from 'react-native-elements';
import {connect} from 'react-redux';
import { addCard } from '../actions';
import { white, blue } from '../utils/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../utils/styles';


class CardNew extends React.Component {
  state = {
    question: "",
    answer: "",
    errors: ""
  }

  static navigationOptions = {
    title: 'Back to Deck',
    headerTitleStyle: { color: blue },

  };

  addCardToDeck = () => {
    const { question, answer } = this.state;
    const title = this.props.navigation.state.params.title;
    if (!question || !answer) {
      this.setState({errors: 'Please fill out both fields'});
      return
    }

    let card = { 'question': question, 'answer': answer }
    this.props.addCard(title, card);
    this.setState({
           question: "",
           answer: "",
           errors: ""
       });

  }

  render () {

    const title = this.props.navigation.state.params.title;
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.container}>
            <Text style={styles.cardTitle}>{title}</Text>
            <TextInput
              style={styles.cardQuestion}
              placeholder='Question'
              value={this.state.question}
              onChangeText={(input) => { this.setState({ question: input }) }}
            />
          <TextInput
              style={styles.answer}
              placeholder='Answer'
              value={this.state.answer}
              onChangeText={(input) => { this.setState({ answer: input }) }}
              multiline={true}
            />
          <FormValidationMessage style={{padding: 18}}>
              {this.state.errors}
          </FormValidationMessage>
          <TouchableOpacity style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
              onPress={this.addCardToDeck}>
            <Text style={styles.submitBtnText}>Add Card</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default connect(null, { addCard })(CardNew);
