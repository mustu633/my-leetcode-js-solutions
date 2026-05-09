// 1909. Remove One Element to Make the Array Strictly Increasing

// Solution

function canBeIncreasing(nums) {
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] >= nums[i]) {
      count++;
      if (count > 1) {
        console.log(false);
        return;
      }
      if (i > 1 && nums[i - 2] >= nums[i]) {
        nums[i] = nums[i - 1];
      }
    }
  }
  console.log(true);
  return;
}

canBeIncreasing([1, 2, 10, 5, 7]);
canBeIncreasing([2, 3, 1, 2]);
canBeIncreasing([1, 1, 1]);
