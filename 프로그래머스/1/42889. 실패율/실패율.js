function solution(N, stages) {


  let gamerInStageList = [...new Array(N + 2)].fill(0)
  let stageFailureRatioList = []
  let gamerTotalNumber = stages.length

  // 단계별 갯수 파악
  stages.forEach(stage => {
    gamerInStageList[stage]++
    
  })
  gamerInStageList.pop() // 모두 클리한 사람의 정보는 초기 gamerTotalNumber 구하고 나서는 쓰지 않기 때문에 pop
  console.log(gamerInStageList)

  // 단계별 실패율 구하기
  stageFailureRatioList = gamerInStageList.reduce((failureList, gamer, stage) => {
    if(stage === 0) return [...failureList]
    const failureRatio = gamer / gamerTotalNumber
    gamerTotalNumber -= gamer
    
    return [...failureList, {stage, failureRatio}]
  },[])

  // 정렬 수행하기
  stageFailureRatioList.sort((a,b) => {
    if (a.failureRatio === b.failureRatio) {
      return a.stage > b.stage ? 1 : -1
    } else {
      // console.log(a.failureRatio, b.failureRatio, a.failureRatio > b.failureRatio)
      return a.failureRatio > b.failureRatio ? -1 : 1 
    }
  })

  const stageListOrderedByFailureRatio = stageFailureRatioList.map(failureInfo => failureInfo.stage) 
  return stageListOrderedByFailureRatio
}