import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { white } from '../utils/colors';
import { connect } from 'react-redux';
import { AppLoading} from 'expo'
import { requestDecks } from '../actions';

class DeckList extends React.Component {
  state = {
    ready: false,
  }

  componentDidMount() {
    this.props.requestDecks()
      .then(() => this.setState(() => ({ready: true})))
  }
  //
  // renderDecks() {
  //   this.decks.
  // }

  render() {
    const { decks } = this.props
    const { ready } = this.state

    console.log('Deck list props',this.props);
    console.log('deck list state', this.state);
    if (ready === false) {
      return <AppLoading />
    }
    return (
      <View style={styles.container}>
        <Text>{this.renderDecks}</Text>
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

const mapStateToProps = ({decks}) => (
  decks
)

export default connect(mapStateToProps, { requestDecks })(DeckList);
