function solution(k, d) {
    let answer = 0;
    let limit_dist = d
    let step = k
    
    for (let x = 0; x <= limit_dist; x += step) {
        // for문으로 풀면 시간 초과..
        // for (let y = 0; x**2 + y**2 <= limit_dist**2; y += step) {
        //     answer++
        // }
        
        // 시간복잡도를 줄일 때 일반적으로 수학적 공식을 이용하면 유용할 수 있다.
        let y = Math.sqrt(limit_dist ** 2 - x ** 2)
        // 0을 포함하기 때문에 + 1
        answer += Math.floor(y / step) + 1
    }
    
    
    return answer;
}