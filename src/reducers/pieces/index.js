import generate   from './generate'
import { pieces } from './config'

const initialState = generate(pieces)

export const piecesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FLIP_PIECE':
      return state.map((piece, index) => 
        index === action.newValue.id 
          ? { ...piece, active: !piece.active } 
          : piece)

    default:
      return state;
  }
};