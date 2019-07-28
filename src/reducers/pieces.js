const pieces = [
    { bgColor: 'red', active: false, removed: false },
    { bgColor: 'yellow', active: false, removed: false },
    { bgColor: 'green', active: false, removed: false },
    { bgColor: 'orange', active: false, removed: false },
    { bgColor: 'pink', active: false, removed: false }
  ]

function generatePieces(pieces) {
  const double = []
  
  double.push(...pieces,...pieces)

  return shuffle(double)
}

function shuffle(pieces) {
  for (let i = pieces.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [pieces[i], pieces[j]] = [pieces[j], pieces[i]];
  }

  return pieces
}

const initialState = generatePieces(pieces)

export const piecesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FLIP_PIECE':
      return state.map((piece, index) => {
        return index === action.newValue.id ? { ...piece, active: !piece.active } : piece
      })

    default:
      return state;
  }
};