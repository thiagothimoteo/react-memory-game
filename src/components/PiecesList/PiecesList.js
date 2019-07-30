import Piece  from '../Piece/Piece'
import React  from 'react'

import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import { remove, reset }      from '../../actions';

class PiecesList extends React.Component {
  compare (activePieces) {
    const { pieces, remove, reset } = this.props

    activePieces[0].name === activePieces[1].name
      ? remove(activePieces)
      : setTimeout(() => { reset(pieces) }, 800)
  }

  getActivePieces (pieces) {
    return pieces.filter(piece => piece.status === 'is-active')
  }

  componentDidUpdate () { 
    const activePieces  = this.getActivePieces(this.props.pieces)

    if (activePieces.length === 2) this.compare(activePieces)
  }

  render() {
    return this.props.pieces.map((piece, key) => <Piece id={key} key={key} piece={piece} />)
  }
}

const mapStateToProps = store => ({
  pieces: store.piecesState,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ remove, reset }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PiecesList);