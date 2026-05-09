// 2161. Partition Array According to Given Pivot

// Solution

function pivotArray(nums, pivot) {
  let right = [];
  let left = [];
  let center = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else if (nums[i] > pivot) {
      right.push(nums[i]);
    } else center.push(nums[i]);
  }
  nums = [...left, ...center, ...right];
  console.log(nums);
  return;
}

pivotArray([9, 12, 5, 10, 14, 3, 10]);
pivotArray([-3, 4, 3, 2]);
