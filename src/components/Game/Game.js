import React       from 'react'
import Board       from '../Board/Board'
import PiecesList  from '../PiecesList/PiecesList'

export default class Game extends React.Component {
  render() {
    return (
      <Board>
        <PiecesList />
      </Board>
    )
  }
}