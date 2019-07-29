import generate   from './generate'
import { pieces } from './config'

const initialState = generate(pieces)

export const piecesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FLIP_PIECE':
      return state.map((piece, index) => 
        index === action.newValue.id 
          ? { ...piece, status: piece.status !== 'is-active' ? 'is-active' : '' } 
          : piece)
    
    case 'REMOVE':
      return state.map(piece =>
        piece.status === 'is-active'
          ? { ...piece, status: 'is-removed' }
          : piece
      )

    case 'RESET':
      return state.map(piece =>
        piece.status === 'is-active'
          ? { ...piece, status: '' }
          : piece 
      )

    default:
      return state;
  }
};