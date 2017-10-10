import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from '../actions'
import { submitDeck } from '../utils/api';


const DecksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DECKS:

      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK:

      return {
        ...state,
        ...action.deck
      }
    case ADD_CARD:
    
      return {
        ...state,
        [action.title]: {
         title: action.title,
         questions: [action.card, ...state[action.title].questions]
        }
      }
    default:
      return state
  }
}

export default DecksReducer;
