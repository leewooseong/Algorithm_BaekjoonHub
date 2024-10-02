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

// 추가풀이.. 제곱근이 정수면 약수의 갯수가 홀수라는 규칙도 있다고 합니다.
// if (Number.isInteger(Math.sqrt(i))) {
//   answer -= i;
// } else {
//   answer += i;
// }
