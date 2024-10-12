function search(nums: number[], target: number): number {
    let result = -1;
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
      result = mid;
      break;
    }
  }

  return result;
};