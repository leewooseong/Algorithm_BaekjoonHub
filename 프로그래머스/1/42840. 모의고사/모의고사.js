const person1Pattern = [1, 2, 3, 4, 5]
const person2Pattern = [2, 1, 2, 3, 2, 4, 2, 5]
const person3Pattern = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

function solution(answers) {
  const problemLength = answers.length;

  let person1Score = 0;
  let person2Score = 0;
  let person3Score = 0;

  for (let i = 0; i < problemLength; i++) {
    if (person1Pattern[i % person1Pattern.length] === answers[i]) person1Score += 1;
    if (person2Pattern[i % person2Pattern.length] === answers[i]) person2Score += 1;    
    if (person3Pattern[i % person3Pattern.length] === answers[i]) person3Score += 1;    
  }

  const maxScore = Math.max(person1Score, person2Score, person3Score)
  const result = [];
  
  if (person1Score === maxScore) {
    result.push(1);
  }
  if (person2Score === maxScore) {
    result.push(2);
  }
  if (person3Score === maxScore) {
    result.push(3);
  }
  
  return result
}