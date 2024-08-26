function solution(n, words) {
  let idx = 1;
  const calledWords = { [words[0]]: 1 };
  while (idx < words.length) {
    const currentWord = words[idx];
    const pastWord = words[idx - 1];
    if (calledWords[currentWord] === 1) {
      break;
    }
    if (pastWord[pastWord.length - 1] != currentWord[0]) {
      break;
    }

    calledWords[currentWord] = 1;
    idx += 1;
  }

  if (idx === words.length) {
    return [0, 0];
  }

  const wrongPerson = (idx + 1) % n !== 0 ? (idx + 1) % n : n;
  const sayCount =
    (idx + 1) % n === 0
      ? Math.floor((idx + 1) / n)
      : Math.floor((idx + 1) / n) + 1;

  return [wrongPerson, sayCount];
}

console.log(
  solution( 5, [
    "hello",
    "observe",
    "effect",
    "take",
    "either",
    "recognize",
    "encourage",
    "ensure",
    "establish",
    "hang",
    "gather",
    "refer",
    "reference",
    "estimate",
    "executive",
  ])
);