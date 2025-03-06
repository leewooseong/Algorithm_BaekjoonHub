function solution(arr1, arr2) {
  const resultRow =  arr1.length;
  const resultCol = arr2[0].length;
  const result = [...new Array(resultRow)].map(_ => new Array(resultCol))

  for (let i = 0; i < resultRow; i++) {
    for (let j = 0; j <resultCol ; j++) {
      let resultItem = 0

      for (let k = 0; k < arr1[0].length; k++) {
        resultItem += arr1[i][k] * arr2[k][j]
      }

      result[i][j] = resultItem
    }
  }

  return result
}