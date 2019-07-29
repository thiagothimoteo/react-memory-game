export const flipPiece = (id, piece) => {
  return {
    type: 'FLIP_PIECE',
    newValue: { id, piece }
  }
}

export const reset = pieces => {
  return {
    type: 'RESET',
    pieces: pieces
  }
}

export const remove = pieces => {
  return {
    type: 'REMOVE',
    pieces: pieces
  }
}