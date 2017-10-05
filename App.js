import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import DeckList from './components/DeckList';
import reducer from './reducers';
import { setLocalNotification } from './utils/helpers';


export default class App extends React.Component {
  componentDidMount () {
    setLocalNotification();
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
         <View style={{flex: 1}}>
           <DeckList />
         </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
