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
    case ADD_CARD:
    console.log('adding card');
    console.log('state', state);
    console.log('action.card = ', action.card);
    console.log('action.title = ', action.title);

      return {
        ...state,
        [action.title]: {
         title: [action.title],
         questions: [[action.card], ...state[action.title].questions]
        }
      }
    default:
      return state
  }
}

export default DecksReducer;
