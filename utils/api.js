import { AsyncStorage } from 'react-native'

import { setFillerData, DECK_STORAGE_KEY } from './_flashCards'

export function fetchDeckResults() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(setFillerData)
}

export function submitDeck ({ key, deck }) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [key]: deck
  }))
}
