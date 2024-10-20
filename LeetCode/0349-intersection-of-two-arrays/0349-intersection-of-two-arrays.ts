function binarySearch(nums: number[], target: number): number {
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
}

// nlogM vs MlogN
// -> 작은 수 * (log 큰 수)가 나와야 더 적은 시간 복잡도를 가져갈 수 있다.
// Nlogn => JavaScript의 sort 시간 복잡도
function intersection(nums1: number[], nums2: number[]): number[] {
  let longArray, shortArray;
  const result: Set<number> = new Set();

  if (nums1.length > nums2.length) {
    longArray = nums1;
    shortArray = nums2;
  } else {
    longArray = nums2;
    shortArray = nums1;
  }

  longArray = longArray.slice().sort((a, b) => a - b);
  shortArray.forEach((num) => {
    const searchResult = binarySearch(longArray, num);
    if (searchResult != -1) {
      result.add(longArray[searchResult]);
    }
  });

  return Array.from(result);
}