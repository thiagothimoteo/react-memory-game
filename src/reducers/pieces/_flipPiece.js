export default function _flipPiece(state, selectedId) {
  return state.map((piece, index) => 
    index === selectedId 
      ? { ...piece, status: piece.status !== 'is-active' ? 'is-active' : '' } 
      : piece)
}