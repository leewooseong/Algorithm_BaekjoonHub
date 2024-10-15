// 무작정 찾아라 + 이분 탐색 문제라서 이분 탐색 적용 x
// 정렬된 배열이라는 조건이 우선시 되어야한다! 까먹지 말자!
// sort()의 경우 유니코드로 변환되어 2자리 숫자의 경우 첫번째 자리만 비교하는 문제가 있다.
// 따라서, sort((a,b) => a - b)와 같이 두 수를 비교해서 정렬하도록 명시적으로 사용하는게 중요하다.
function binarySearch(nums: number[], target: number): number {
  const len = nums.length;
  let start = 0;
  let end = len - 1;

  let result = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] > target) {
      end = mid - 1;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      result = mid;
      break;
    }
  }

  return result;
}

function search(nums: number[], target: number): number {
  // pivot 찾기
  let pivotLen = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      pivotLen = i + 1;
      break;
    }
  }
  const sortedNums = nums.slice().sort((a, b) => a - b);
  const sortedTargetIndex = binarySearch(sortedNums, target);
  console.log(sortedNums, sortedTargetIndex, pivotLen);

  if (sortedTargetIndex === -1) {
    return -1;
  } else {
    const targetIndex =
      sortedTargetIndex + pivotLen > nums.length - 1
        ? sortedTargetIndex + pivotLen - nums.length
        : sortedTargetIndex + pivotLen;

    return targetIndex;
  }
}

// const nums = [4, 5, 6, 7, 0, 1, 2];
// const target = 5;
// const nums = [3, 1];
// const target = 1;
const nums = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14];
const target = 25;

const result = search(nums, target);
console.log(result);

export {};
