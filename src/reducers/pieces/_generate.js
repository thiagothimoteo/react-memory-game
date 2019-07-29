import _shuffle from './_shuffle'

export default function _generate(pieces) {
  const double = []
  
  double.push(...pieces,...pieces)

  return _shuffle(double)
}