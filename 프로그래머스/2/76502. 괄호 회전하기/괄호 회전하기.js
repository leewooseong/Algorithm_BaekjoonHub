function getMatchedSpell(spell) {
  switch (spell) {
    case '[':
      return ']';
    case '{':
      return '}';
    case '(':
      return ')';
    default:
      return null;
  }
}

function solution(s) {
  const rotatingCaseNumber = s.length;
  let matchingCount = 0;

  for (let i = 0; i < rotatingCaseNumber; i++) {
    const stack = [];
    const previousString = s.slice(i);
    const subsequentString = s.slice(0, i);
    const rotatedString = previousString + subsequentString;

    for (let j = 0; j < rotatedString.length; j++) {
      if (stack.length === 0) {
        stack.push(rotatedString[j]);
        continue;
      }

      const comparingSpell = stack[stack.length - 1];
      const matchedSpell = getMatchedSpell(comparingSpell);

      if (matchedSpell === rotatedString[j]) {
        stack.pop();
      } else {
        stack.push(rotatedString[j]);
      }
    }

    if (stack.length === 0) {
      matchingCount++;
    }
  }

  return matchingCount;
}