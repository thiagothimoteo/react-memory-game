import { combineReducers } from 'redux';
import { piecesReducer }          from './pieces';

export const Reducers = combineReducers({
  piecesState: piecesReducer,
});