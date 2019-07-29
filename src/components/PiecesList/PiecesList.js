import Piece  from '../Piece/Piece'
import React  from 'react'

import { connect }                  from 'react-redux';
import { bindActionCreators       } from 'redux';
import { remove, reset } from '../../actions';

class PiecesList extends React.Component {
  compare () {
    const { pieces, remove, reset } = this.props

    const activePieces = pieces.filter(piece => piece.status === 'is-active')

    if (activePieces.length === 2)
      activePieces[0].bgColor === activePieces[1].bgColor
        ? remove(activePieces)
        : setTimeout(() => { reset(this.props.pieces) }, 800)
  }

  componentDidUpdate () {
    this.compare()
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