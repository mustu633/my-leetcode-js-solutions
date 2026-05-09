// 169. Majority Element

// Solution

function majorityElement(nums) {
  let check = [];
  let count = 0;
  let result = [null, null];
  for (let i = 0; i < nums.length; i++) {
    if (!check.includes(nums[i])) {
      for (let j = 0; j < nums.length; j++) {
        if (nums[i] === nums[j]) {
          count++;
        }
      }
      if (count > result[1]) {
        result = [nums[i], count];
        count = 0;
      } else {
        count = 0;
      }
      check.push(nums[i]);
    }
  }

  console.log(result[0]);
  return;
}

majorityElement([3, 2, 3]);
majorityElement([2, 2, 1, 1, 1, 2, 2]);
