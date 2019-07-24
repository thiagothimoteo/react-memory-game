import React from 'react'
import './Piece.sass'

export default class Piece extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const id = this.props.id
    const piece = this.props.piece

    this.props.flip(id, piece)
  }

  render () {
    return (
      <div className={`piece ${ this.props.piece.active ? 'is-active' : '' }`} onClick={this.handleClick}>
        <div className="piece-content">
          <div className="piece-content-front" style={{ backgroundColor: this.props.piece.bgColor}}>
          </div>
          <div className="piece-content-back">
              Back
          </div>
        </div>
      </div>
    )
  }
}