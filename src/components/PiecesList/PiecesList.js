import Piece  from '../Piece/Piece'
import React  from 'react'
import { thisExpression } from '@babel/types';

export default class PiecesList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pieces: [
        { bgColor: 'red', active: false },
        { bgColor: 'yellow', active: false },
        { bgColor: 'green', active: false },
        { bgColor: 'orange', active: false },
        { bgColor: 'pink', active: false }
      ],
      doubleUp: []
    }

    this.flip = this.flip.bind(this)
  }

  componentDidMount () {
    const double = []
    const pieces = this.state.pieces.concat()
    
    double.push(...pieces,...pieces)

    this.shuffle(double)
  }

  shuffle(pieces) {
    for (let i = pieces.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [pieces[i], pieces[j]] = [pieces[j], pieces[i]];
    }

    this.setState({ doubleUp: pieces })

    return pieces
  }

  flip (id, piece) {
    console.log(id, piece, this.state.doubleUp[id])
  }

  render() {
    return this.state.doubleUp.map((piece, key) => <Piece flip={this.flip} id={key} key={key} piece={piece} />)
  }
}