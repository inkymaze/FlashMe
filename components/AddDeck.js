import React, { Component } from 'react'
import { View, TouchableOpacity, Text,
  TextInput, StyleSheet, Platform, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { blue, white } from '../utils/colors';
import { NavigationActions } from 'react-navigation'
import { submitDeck } from '../utils/api';
import { FormValidationMessage } from 'react-native-elements';

function SubmitBtn ({ onPress }) {
  return (
    <TouchableOpacity
      style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
      onPress={onPress}>
        <Text style={styles.submitBtnText}>Create Deck</Text>
    </TouchableOpacity>
    )
}

class AddDeck extends Component {
  state = {
    title: "",
    questions: [],
    errors: ""
  }

  submit = () => {

    const key = this.state.title
    const deck = { 'title': this.state.title,
                   'questions': this.state.questions}

    if (!key) {
      this.setState({errors: 'Please fill out a deck title'});
      return
    }

    this.props.addDeck({
      [key]: deck
    })

    this.setState(() => ({ title: "", questions: [] }))

    this.toDeck(key)

    submitDeck({ key, deck })

  }

  toDeck = (title) => {
    this.props.navigation.navigate(
      'DeckDetail', { title: title })

  }

  render() {
    const {title} = this.state
    console.log('add deck props', this.props);
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.container}>
          <Text style={[styles.center, {color: blue}, {fontSize: 30} ]}>
            What's the title of your new FlashMe deck?
          </Text>
          <View style={styles.row}>
            <TextInput
              style={[styles.center, {color: blue}]}
              placeholder='Deck Title'
              value={title}
              onChangeText={(title) => {this.setState({ title })}}/>
          </View>
          <SubmitBtn onPress={this.submit} />
            <FormValidationMessage>
                {this.state.errors}
            </FormValidationMessage>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',

    backgroundColor: white
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    alignSelf: "center",
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
    fontSize: 22,
    textAlign: 'center',
  },
  center: {
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginLeft: 30,
    marginRight: 30,
  },
})



export default connect(null, {addDeck})(AddDeck);
