function solution(board, moves) {
  const stack = [];
  const boardSize = board.length;
  const dollsInfo = {};
  let matchingCount = 0;

  for (let i = 1; i <= boardSize; i++) {
    dollsInfo[i] = [];
  }

  // 나중에 원소를 빼기 쉽게 밑에서 부터 정보 가져오기
  for (let i = boardSize - 1; i >= 0; i--) {
    for (let j = 0; j < boardSize; j++) {
      board[i][j] !== 0 && dollsInfo[j + 1].push(board[i][j]);
    }
  }

  moves.forEach(move => {
    const doll = dollsInfo[move].pop();
    if (!doll) return;

    if (stack[stack.length - 1] === doll) {
      stack.pop();
      matchingCount++;
      return;
    }
    stack.push(doll);
  });

  return matchingCount * 2;
}
