// 53. Maximum Subarray

// Solution
function maxSubArray(nums) {
  let result = nums[0];
  let subArrSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    subArrSum = Math.max(nums[i], subArrSum + nums[i]);
    result = Math.max(result, subArrSum);
  }
  console.log(result);
  return;
}

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
maxSubArray([1]);
maxSubArray([5, 4, -1, 7, 8]);
maxSubArray([1, 2, 3]);
maxSubArray([-1]);
maxSubArray([0]);
