export default function shuffle(pieces) {
  for (let i = pieces.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [pieces[i], pieces[j]] = [pieces[j], pieces[i]];
  }

  return pieces
}