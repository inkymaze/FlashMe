import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import DeckList from './components/DeckList';
import AddDeck from './components/AddDeck';
import DeckDetail from './components/DeckDetail';
import rootReducer from './reducers/root_reducer';
import { setLocalNotification } from './utils/helpers';
import { TabNavigator, StackNavigator } from 'react-navigation';
import thunk from 'redux-thunk';
import {Constants} from 'expo';
import { blue } from './utils/colors';
import { FontAwesome, Ionicons } from '@expo/vector-icons';


function FlashCardStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
  )
}

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
      <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
         <View style={{flex: 1}}>
          <FlashCardStatusBar backgroundColor={ blue } barStyle='light-content'/>
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
