import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { white, blue } from '../utils/colors';
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
  //   Object.values(this.props.decks).map(deck => {
  //     console.log('deck title', deck.title);
  //     return (
  //       <View style={styles.container}>
  //         <Text style={[styles.container, {color: blue}]}>Hello</Text>
  //
  //       </View>
  //     )
  //   })
  // }

 //  _renderItem = (deck) => (
 //
 //    <View>
 //     <Text >{deck.title}</Text>
 //     <Text >Questions:({deck.questions.length})</Text>
 //    </View>
 // );

  _keyExtractor = (item, index) => item.id;

  render() {
    const { decks } = this.props
    const { ready } = this.state

    console.log('Deck list props',decks);
    // console.log('deck list state', this.state);
    if (ready === false) {
      return <AppLoading />
    }
    return (
      <View style={styles.container}>
        

          <FlatList
            data={Object.keys(decks)}
            renderItem={({item}) =>
              <Text>{item}</Text>}
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
  }
});

const mapStateToProps = (decks) => (
  decks
)

export default connect(mapStateToProps, { requestDecks })(DeckList);
