function solution(wallpaper) {
  const width = wallpaper.length;
  const height = wallpaper[0].length;
  const FILE = "#";

  // # 드래그 zone의 각 꼭짓점을 구하기
  let left = -1;
  let right = width;
  let up = -1;
  let down = height;

  // # 첫번째 파일인지 파악하기 위한 변수
  let fileCount = 0;

  // # 배열을 순서대로 순회하며 첫 파일과 마지막 파일의 좌표 찾기
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      if (wallpaper[i][j] === FILE) {
        // 처음 만난 파일에 대해서만 초기 셋팅 진행
        if (fileCount === 0) {
          up = i;
          left = j;
          down = i + 1;
          right = j + 1;
        }
        // 아닌 경우에는 각 방향에 대해서 값 갱신을 진행
        else {
          if (i < up) up = i;
          if (j < left) left = j;
          if (down < i + 1) down = i + 1;
          if (right < j + 1) right = j + 1;
        }

        fileCount += 1;
      }
    }
  }

  var answer = [up, left, down, right];
  return answer;
}
 