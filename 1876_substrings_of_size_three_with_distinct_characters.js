// 1876. Substrings of Size Three with Distinct Characters

// Solution

function countGoodSubstrings(s) {
  s = s.toLowerCase();
  let count = 0;
  for (let i = 0; i < s.length - 2; i++) {
    if (
      s[i] !== s[i + 1] &&
      s[i] !== s[i + 1 + 1] &&
      s[i + 1] !== s[i + 1 + 1]
    ) {
      count++;
    }
  }

  console.log(count);
  return;
}

countGoodSubstrings("xyzzaz");
countGoodSubstrings("aababcabc");
