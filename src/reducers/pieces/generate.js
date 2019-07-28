import shuffle from './shuffle'

export default function generate(pieces) {
  const double = []
  
  double.push(...pieces,...pieces)

  return shuffle(double)
}