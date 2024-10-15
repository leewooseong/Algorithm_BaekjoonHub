function binarySearch(
  nums: number[],
  target: number,
  startIndex: number,
  endIndex: number
): number {
  let start = startIndex;
  let end = endIndex;

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

function findPivotIndex(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    // right가 작다는 건 mid 값이 이후에 더 작은 수가 존재한다는 뜻
    // → 오른차순이여야 하는데 정렬이 깨져있다.
    // → 변곡점(pivot)이 뒤에 있다는 의미
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    }
    // right가 크다는 건 mid 값 이후는 잘 정렬되어 있다는 뜻
    // → 오른차순이 잘 되어져 있다.
    // → 변곡점이 앞에 있다는 의미
    else {
      // 왼쪽 절반에 최소값이 있다면
      right = mid;
    }
  }

  return left; // left와 right가 같은 위치에서 종료
}

function search(nums: number[], target: number): number {
  // 1. pivot(제일 작은 값)의 index 찾기
  const pivotIndex = findPivotIndex(nums);

  if (nums[pivotIndex] === target) {
    return pivotIndex;
  }

  // 2. target 값이 pivot을 기준으로 전에 있는지 뒤에 있는지 판단하기(어떤 그룹에 속해 있는지 판단)
  if (nums[pivotIndex] < target && target <= nums[nums.length - 1]) {
    return binarySearch(nums, target, pivotIndex + 1, nums.length - 1);
  } else {
    return binarySearch(nums, target, 0, pivotIndex - 1);
  }
}