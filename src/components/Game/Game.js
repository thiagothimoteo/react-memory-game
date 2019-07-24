import React       from 'react'
import Board       from '../Board/Board'
import PiecesList  from '../PiecesList/PiecesList'

export default class Game extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Board>
        <PiecesList />
      </Board>
    )
  }
}