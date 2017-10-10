import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { white, blue } from '../utils/colors';
import { connect } from 'react-redux';
import { AppLoading} from 'expo'
import { requestDecks } from '../actions';
import _ from 'lodash';

class DeckList extends React.Component {
  state = {
    ready: false,
  }

  static navigationOptions = {
    title: 'My FlashMe Decks',
    headerTitleStyle: { color: blue }
  };

  componentDidMount() {
    this.props.requestDecks()
      .then(() => this.setState(() => ({ready: true})))
  }

  // Ask udacity why this doesnt work
  // renderItem({item}) {... but the below does

  renderItem = ({item}) => {
      let question = item.questionCount === 1 ? 'question' : 'questions';
       return (
         <TouchableOpacity style={styles.deck}
           onPress={() => this.props.navigation.navigate(
             'DeckDetail', { title: item.title }
          )}>
             <Text style={styles.title}>{item.title}</Text>
             <Text style={styles.question}>{item.questionCount} {question}</Text>
         </TouchableOpacity>
       );
   }


  render() {
    const { ready } = this.state
    const decks = _.map(this.props.decks, deck => {
           return {
               title: deck.title,
               questionCount: deck.questions.length
           }
       });

    if (ready === false) {
      return <AppLoading />
    }
    return (
      <View style={styles.container}>

        <FlatList
         data={decks}
         showsVerticalScrollIndicator={false}
         renderItem={this.renderItem}
         keyExtractor={item => item.title}
       />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: white
  },
  deck: {
    height: 100,
    padding: 10,
    marginLeft: 15,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: blue,
  },
  title: {
    fontSize: 29,
    color: blue,
  },
  question: {
    fontSize: 17,
    color: blue
  }
});

const mapStateToProps = ({decks}) => ({
  decks
});

export default connect(mapStateToProps, { requestDecks })(DeckList);
