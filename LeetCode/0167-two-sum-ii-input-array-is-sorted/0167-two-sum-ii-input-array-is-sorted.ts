function binarySearch(nums: number[], target: number): number {
  let targetIndex = -1;
  const len = nums.length;

  let start = 0;
  let end = len - 1;
  let mid = Math.floor((start + end) / 2);

  while (start <= end) {
    if (nums[mid] < target) {
      start = mid + 1;
      mid = Math.floor((start + end) / 2);
    } else if (nums[mid] > target) {
      end = mid - 1;
      mid = Math.floor((start + end) / 2);
    } else {
      targetIndex = mid;
      break;
    }
  }

  return targetIndex;
}

function twoSum(numbers: number[], target: number): number[] {
  let firstIndex = -1;
  let lastIndex = -1;

  for (let i = 0; i < numbers.length; i++) {
    firstIndex = i;
    const firstNum = numbers[firstIndex];
    const lastNum = target - firstNum;

    const targetIndex = binarySearch(numbers.slice(firstIndex + 1), lastNum);

    if (targetIndex !== -1) {
      lastIndex = targetIndex + firstIndex + 1;
      break;
    }
  }

  return [firstIndex + 1, lastIndex + 1];
}
