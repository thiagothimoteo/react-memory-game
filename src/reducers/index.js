import { combineReducers } from 'redux';
import { piecesReducer   } from './pieces/index';

export const Reducers = combineReducers({
  piecesState: piecesReducer,
});