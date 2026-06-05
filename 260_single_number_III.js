// 260. Single Number III

// Solution

function singleNumber(nums) {
  nums.sort();
  let result=[];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      i++;
    } else {
      result.push(nums[i]);
    }
  }
  console.log(result);
}

singleNumber([1,2,1,3,2,5]);
singleNumber([-1,0]);
singleNumber([0,1]);
