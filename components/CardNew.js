import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';


class CardNew extends React.Component {


  render () {
    console.log('new card form props', this.props);
    return (
      <View>
        <Text>CardNew FORM </Text>
      </View>
    );
  }
}



export default connect(null)(CardNew);
