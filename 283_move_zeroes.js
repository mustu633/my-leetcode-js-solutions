// 283. Move Zeroes

// Solution

function moveZeroes(nums) {
  let indx = 0;
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] !== 0) {
      nums[indx] = nums[i];
      indx++;
    }
  }
  for (let i = indx; i < n; i++) {
    nums[i] = 0;
  }

  console.log(nums);
  return;
}

moveZeroes([0, 1, 0, 3, 12]);
moveZeroes([0]);
