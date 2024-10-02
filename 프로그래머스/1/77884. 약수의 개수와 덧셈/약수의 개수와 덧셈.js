const getDivisorCount = (num) => {
  let divisorCount = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      divisorCount++;
    }
  }

  return divisorCount;
};

function solution(left, right) {
  var answer = 0;

  for (let i = left; i <= right; i++) {
    let divisorCount = getDivisorCount(i);
    // 짝수이면
    if (divisorCount % 2 == 0) {
      answer += i;
    }
    // 홀수 이면
    else {
      answer -= i;
    }
  }

  return answer;
}
