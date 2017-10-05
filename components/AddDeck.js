import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { purple, white } from './utils/colors';
import { NavigationActions } from 'react-navigation'

class AddDeck extends Component {
  state = {
    title: "",
    questions: [],
  }

  submit = () => {
  
    const key = this.state.title
    const deck = this.state

    this.props.dispatch(addDeck({
      [key]: deck
    }))

    this.setState(() => ({ title: "", questions: [] }))

    this.toHome()

    submitDeck({ key, deck })

  }

  toHome = () => {
    this.props.navigation.dispatch(NavigationActions.back({key: 'AddDeck'}))
  }


  render() {


    return (
      <View style={styles.container}>

          return (
            <View key={key} style={styles.row}>
              <Text> </Text>
            </View>
          )
        })}
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
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
  },
  AndroidSubmitBtn: {
    backgroundColor: purple,
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



export default AddEntry;
