// 136. Single Number

// Solution

function singleNumber(nums) {
  nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      i++;
    } else {
      console.log(nums[i]);
    }
  }
}

singleNumber([2, 2, 1]);
singleNumber([4, 1, 2, 1, 2]);
singleNumber([1]);
