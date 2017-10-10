import React from 'react';
import {View, Text, StyleSheet, Dimensions,
  TouchableOpacity, TextInput, Platform, KeyboardAvoidingView} from 'react-native';
import { Button, FormValidationMessage } from 'react-native-elements';
import {connect} from 'react-redux';
import { addCard } from '../actions';
import { white, blue } from '../utils/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

class CardNew extends React.Component {
  state = {
    question: "",
    answer: "",
    errors: ""
  }

  static navigationOptions = {
    title: 'Back to Deck',
    headerTitleStyle: { color: blue }
  };

  addCardToDeck = () => {
    const { question, answer } = this.state;
    const title = this.props.navigation.state.params.title;
    if (!question || !answer) {
      this.setState({errors: 'Please fill out both fields'});
      return
    }

    let newCard = { 'question': question, 'answer': answer }
    this.props.addCard(title, newCard);
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
          <Text style={styles.title}>{title}</Text>
          <TextInput
            style={styles.question}
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
        <TouchableOpacity style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
                onPress={this.addCardToDeck}>
              <Text style={styles.submitBtnText}>Add Card</Text>
            </TouchableOpacity>
        <FormValidationMessage>
            {this.state.errors}
        </FormValidationMessage>

      </View>
    </KeyboardAvoidingView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center'
  },
  title: {
    fontSize: 35,
    color: blue,
    borderBottomWidth: 3,
    borderBottomColor: blue,
  },
  question: {
    fontSize: 25,
    padding: 30,
    color: blue,
    borderBottomWidth: 1,
    borderBottomColor: blue,
    justifyContent: "center",
    alignItems: "center",
  },
  answer: {
    fontSize: 23,
    flex: 1,
    color: blue,
    padding: 30,
    margin: 25,
    borderBottomColor: blue,
    justifyContent: "center",
    alignItems: "center",
  },
  addCard: {
    justifyContent: "flex-end",
    color: blue,

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
    fontSize: 20,
    textAlign: 'center',
  }

});




export default connect(null, { addCard })(CardNew);
