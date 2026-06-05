// 137. Single Number II

// Solution

function singleNumber(nums) {
  nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1] && nums[i + 1] === nums[i + 2]) {
      i = i + 2;
    } else {
      console.log(nums[i]);
    }
  }
}

singleNumber([2, 2, 3, 2]);
singleNumber([0, 1, 0, 1, 0, 1, 99]);
