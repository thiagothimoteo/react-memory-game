import React from 'react'

import './Board.sass'

export default class Board extends React.Component {
  render () {
    return (
      <div className="board">
        <div className="board-grid">
          { this.props.children }
        </div>
      </div>
    )
  }
}
