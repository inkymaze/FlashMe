import { AsyncStorage } from 'react-native';
import { DECK_STORAGE_KEY, setFillerData } from './_flashCards.js';


export function submitDeck ({ deck, key }) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [key]: deck
  }));
}

export function fetchDeckResults () {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
  .then(setFillerData);
}
