export default function _reset(state) {
  return state.map(piece =>
    piece.status === 'is-active'
      ? { ...piece, status: '' }
      : piece 
  )
}