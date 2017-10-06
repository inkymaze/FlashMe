import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from '../actions'

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
    // case ADD_CARD:
    //
    //   return {
    //     ...state,
    //     [action.card.title]: {
    //      action.card.title,
    //      questions: [{ question, answer, result: null }, ...state[action.card.title].questions]
    //     }
    //   }
    default:
      return state
  }
}

export default DecksReducer;
