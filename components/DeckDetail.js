import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class DeckDetail extends React.Component {

  render() {
    console.log('deck detail props', this.props);
    return (
      <View>
        <Text>DECK DETAIL</Text>
      </View>
    );

  }
}

export default DeckDetail;
