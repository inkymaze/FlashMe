import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import DeckList from './components/DeckList';
import AddDeck from './components/AddDeck';
import DeckDetail from './components/DeckDetail';
import reducer from './reducers';
import { setLocalNotification } from './utils/helpers';
import { TabNavigator, StackNavigator } from 'react-navigation';

import { blue } from './utils/colors';
import { FontAwesome, Ionicons } from '@expo/vector-icons';


const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: () => <Ionicons name='ios-home' size={30} color={blue} />
    },
  },
  AddDeck: {
  screen: AddDeck,
  navigationOptions: {
    tabBarLabel: 'Add Deck',
    tabBarIcon: () => <FontAwesome name='plus-square' size={30} color={ blue } />
  },
}
});

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  DeckDetail: {
    screen: DeckDetail
  },
  DeckList: {
    screen: DeckList
  }
});

export default class App extends React.Component {
  componentDidMount () {
    setLocalNotification();
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
         <View style={{flex: 1}}>
           <View>
             <StatusBar backgroundColor={ blue }/>
           </View>
           <MainNavigator />
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
