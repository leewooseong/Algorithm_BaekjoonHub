const DIR = { UP: 'U', LEFT: 'L', RIGHT: 'R', DOWN: 'D' };
const OPPOSITE_DIR = { U: 'D', D: 'U', R: 'L', L: 'R' };
const DIR_MOVE = { U: [-1, 0], L: [0, -1], R: [0, 1], D: [1, 0] };

function solution(dirs) {
  let initialVisitCount = 0;
  let currentRow = 5;
  let currentCol = 5;
  const fieldMatrix = [...new Array(11)].map(_ => [...new Array(11)].map(_ => ({ U: 0, R: 0, B: 0, L: 0 })));

  for (const dir of dirs) {
    const oppositeDir = OPPOSITE_DIR[dir];
    const moveInfo = DIR_MOVE[dir];
    const nextRow = currentRow + moveInfo[0];
    const nextCol = currentCol + moveInfo[1];

    try {
      if (fieldMatrix[currentRow][currentCol][dir] === 0 || fieldMatrix[nextRow][nextCol][oppositeDir] === 0) {
        fieldMatrix[currentRow][currentCol][dir] += 1;
        fieldMatrix[nextRow][nextCol][oppositeDir] += 1;

        initialVisitCount += 1;
      }

      currentRow = nextRow;
      currentCol = nextCol;
    } catch (error) {
      // console.log(error);
    }
  }

  return initialVisitCount;
}
