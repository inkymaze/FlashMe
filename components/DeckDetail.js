import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { white, blue } from '../utils/colors';
import { FontAwesome, Ionicons } from '@expo/vector-icons';


class DeckDetail extends React.Component {

  render() {
    const {deck} = this.props;
    console.log('deck detail props', this.props);
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{deck.title}</Text>

        <TouchableOpacity
            onPress={() => this.props.navigation.navigate(
              'CardNew',
              { title: deck.title })}>
            <FontAwesome name='edit' size={30} color={ blue } />
            <Text style={styles.question}>Create New Question</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => this.props.navigation.navigate(
              'Quiz',
              { title: deck.title })}>

            <Text style={styles.question}>Start Quiz</Text>
        </TouchableOpacity>
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
    fontSize: 17,
    color: blue
  },
  addCard: {
    justifyContent: "flex-end",
    color: blue,
  }

});


function mapStateToProps ({decks}, ownProps) {
  const { title } = ownProps.navigation.state.params;
  return {
    deck: decks[title]
  };
}


export default connect(mapStateToProps)(DeckDetail);
