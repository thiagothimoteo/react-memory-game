import _generate   from './_generate'
import { pieces }  from './config'
import _remove     from './_remove'
import _reset      from './_reset'
import _flipPiece  from './_flipPiece'

const initialState = _generate(pieces)

export const piecesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FLIP_PIECE':
      return _flipPiece(state, action.newValue.id)
    
    case 'REMOVE':
      return _remove(state)

    case 'RESET':
      return _reset(state)

    default:
      return state;
  }
};