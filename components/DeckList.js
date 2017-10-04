import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { white } from '../utils/colors';


class DeckList extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <Text>DECKLIST</Text>
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

export default DeckList;
