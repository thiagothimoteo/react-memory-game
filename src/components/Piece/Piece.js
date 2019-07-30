import React from 'react'
import './Piece.sass'

import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import { flipPiece }          from '../../actions'

class Piece extends React.Component {
  render () {
    const { flipPiece, id, piece } = this.props

    this.flipPiece = flipPiece.bind(this, id, piece)

    return (
      <div className={`piece ${ this.props.piece.status } `} onClick={this.flipPiece}>
        <div className="piece-content">
          <div className="piece-content-front" style={{ backgroundImage: `url(${this.props.piece.thumbnail})` }}>
          </div>
          <div className="piece-content-back">
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ flipPiece }, dispatch)

export default connect(null, mapDispatchToProps)(Piece)