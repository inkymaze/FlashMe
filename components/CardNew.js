import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';
import {connect} from 'react-redux';
import { addCard } from '../actions';
import { white, blue } from '../utils/colors';

class CardNew extends React.Component {
  state = {
    question: "",
    answer: "",
  }
  //
  addCardToDeck = () => {
    const { question, answer } = this.state;
    // const title = this.props.navigation.state.params.title;
    if (question === "" || answer )
    // this.props.addCard(title, this.state);
  //
  }

  render () {
    console.log('new card form props', this.props);
    console.log('q', this.state.question === "");
    return (
      <View style={styles.container}>

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
            multiline = {true}
          />
        <Button title="Submit" onPress={this.addCardToDeck}/>


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
    fontSize: 29,
    color: blue,
    justifyContent: "flex-start",

  },
  question: {
    fontSize: 23,
    flex: .25,
    color: blue,

    borderBottomWidth: 1,
    borderBottomColor: blue,
    justifyContent: "center",
    alignItems: "center",
  },
  answer: {
    fontSize: 23,
    flex: .55,
    color: blue,
    paddingTop: 30,
    borderBottomColor: blue,
    justifyContent: "center",
    alignItems: "center",
  },
  addCard: {
    justifyContent: "flex-end",
    color: blue,

  }

});




export default connect(null, { addCard })(CardNew);
