// 1929. Concatenation of Array

// Solution

function getConcatenation(nums) {
  const ans = [...nums].concat([...nums]);

  console.log(ans);
  return;
}

getConcatenation([1, 2, 1]);
getConcatenation([1, 3, 2, 1]);
