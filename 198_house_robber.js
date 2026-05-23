// 198. House Robber

// Solution

function rob(nums) {
  if (nums.length === 0) {
    console.log(0);
    return;
  }
  let chk1 = 0;
  let chk2 = 0;
  let temp;
  for (let i = 0; i < nums.length; i++) {
    temp = chk1;
    chk1 = Math.max(chk2 + nums[i], chk1);
    chk2 = temp;
  }
  console.log(chk1);
}

rob([]);
rob([1]);
rob([1, 1]);
rob([2, 1, 1, 2]);
rob([1, 2, 3, 1]);
rob([2, 7, 9, 3, 1]);
rob([1, 3, 1, 3, 100]);
