// 약수의 합
// - n을 입력, n의 약수를 모두 더한 값을 리턴
function solution(n) {
    var answer = 0;
    
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
          answer += i
        }
    }
    
    return answer;
}