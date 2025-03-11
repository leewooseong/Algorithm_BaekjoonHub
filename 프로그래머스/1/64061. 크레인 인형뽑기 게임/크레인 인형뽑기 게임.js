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
    if (dollsInfo[move].length <= 0) return;

    const doll = dollsInfo[move].pop();
    console.log(doll);

    if (stack.length === 0) {
      stack.push(doll);
    } else if (stack[stack.length - 1] === doll) {
      stack.pop();
      matchingCount++;
    } else {
      stack.push(doll);
    }
  });

  return matchingCount * 2;
}