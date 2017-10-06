import { combineReducers } from 'redux';
import DecksReducer from './decks_reducer';


const rootReducer = combineReducers({
  decks: DecksReducer,
});

export default rootReducer;
