export const flipPiece = (id, piece) => {
  return {
    type: 'FLIP_PIECE',
    newValue: { id, piece }
  }
}