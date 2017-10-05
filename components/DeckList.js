import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { white } from '../utils/colors';
import { connect } from 'react-redux';
import { receiveDecks } from '../actions';
import { fetchDeckResults } from '../utils/api';
import { AppLoading} from 'expo'

class DeckList extends React.Component {
  state = {
    ready: false,
  }

  componentDidMount() {
    fetchDeckResults()
      .then((decks) => this.props.dispatch(receiveDecks(decks)))
      // .then((results) => this.props.receiveDecks(results))
      .then(() => this.setState(() => ({ready: true})))


  }

  render() {
    const { decks } = this.props
    const { ready } = this.state

    console.log('Deck list props',this.props);

    if (ready === false) {
      return <AppLoading />
    }
    return (
      <View style={styles.container}>
        <Text>Decklist</Text>
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
  }
});

const mapStateToProps = (decks) => (
  decks
)

export default connect(mapStateToProps)(DeckList);
