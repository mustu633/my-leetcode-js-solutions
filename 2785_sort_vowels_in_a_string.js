// 2785. Sort Vowels in a String

// Solution

function sortVowels(s) {
  const vowelsSet = new Set(["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]);

  let vowels = [];
  for (let x of s) {
    if (vowelsSet.has(x)) {
      vowels.push(x);
    }
  }

  vowels.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));

  let result = "";
  let i = 0;

  for (let y of s) {
    if (vowelsSet.has(y)) {
      result += vowels[i++];
    } else {
      result += y;
    }
  }

  console.log(result);
  return;
}

sortVowels("lEetcOde");
sortVowels("lYmpH");
