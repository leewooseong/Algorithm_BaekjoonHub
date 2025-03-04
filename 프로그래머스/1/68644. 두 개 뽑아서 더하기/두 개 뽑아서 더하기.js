function solution(numbers) {
  const numberSet = new Set()
  let answer = [];

  numbers.forEach((num1, index1) => {
    numbers.forEach((num2, index2) => {
      if (index1 === index2) return
      numberSet.add(num1 + num2)
    })
  });

  answer = [ ...numberSet].sort((a,b) => a - b)
    
  return answer;
}