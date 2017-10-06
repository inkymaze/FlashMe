import React, { Component } from 'react'
import { View, TouchableOpacity, Text, TextInput, StyleSheet, Platform, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { blue, white } from '../utils/colors';
import { NavigationActions } from 'react-navigation'
import { submitDeck } from '../utils/api';

function SubmitBtn ({ onPress }) {
return (

  <TouchableOpacity
    style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
    onPress={onPress}>
      <Text style={styles.submitBtnText}>SUBMIT</Text>
  </TouchableOpacity>

)
}

class AddDeck extends Component {
  state = {
    title: "",
    questions: [],
  }

  submit = () => {

    const key = this.state.title
    const deck = this.state

    this.props.addDeck({
      [key]: deck
    })

    this.setState(() => ({ title: "", questions: [] }))
  
    this.toHome()

    submitDeck({ key, deck })

  }

  toHome = () => {
    this.props.navigation.dispatch(NavigationActions.back({key: 'AddDeck'}))
  }




  render() {
    const {title} = this.state
    console.log('add deck props', this.props);
    return (

      <View style={styles.container}>

        <Text style={[styles.center, {color: blue}]}>What is the title of your new FlashMe deck?</Text>

        <View style={styles.row}>

              <TextInput
                style={styles.center}
                placeholder='Deck Title'
                value={title}
                onChangeText={(title) => {this.setState({ title })}}/>
            </View>

        <SubmitBtn onPress={this.submit} />

      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
  },
})



export default connect(null, {addDeck})(AddDeck);
