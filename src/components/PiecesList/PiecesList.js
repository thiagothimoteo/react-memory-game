import Piece  from '../Piece/Piece'
import React  from 'react'

import { connect } from 'react-redux';

class PiecesList extends React.Component {
  render() {
    const { pieces } = this.props

    return pieces.map((piece, key) => <Piece id={key} key={key} piece={piece} />)
  }
}

const mapStateToProps = store => ({
  pieces: store.piecesState
});

export default connect(mapStateToProps)(PiecesList);