import { submitDeck } from '../utils/api';
import { fetchDeckResults } from '../utils/api';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';

export function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  };
}

export function addDeck (deck) {
  return {
    type: ADD_DECK,
    deck,
  };
}

export function addCard(card) {
  return {
    type: ADD_CARD,
    card,
  };
}

// likely needs to break down card when sendign to submitDeck
export const requestAddCard = (card) => dispatch => {
  return submitDeck(card).then( cardResponse => {
      dispatch(addCard(cardResponse));
    });
};

export const requestDecks = () => dispatch => {
  return fetchDeckResults().then( decks => {
      dispatch(receiveDecks(decks));
    });
};
