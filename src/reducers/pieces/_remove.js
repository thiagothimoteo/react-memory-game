export default function _remove(state) {
  return state.map(piece =>
    piece.status === 'is-active'
      ? { ...piece, status: 'is-removed' }
      : piece
  )
}