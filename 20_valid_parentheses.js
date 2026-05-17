// 20. Valid Parentheses

// Solution

function isValid(s) {
  let symbols = ["(", "{", "[", ")", "}", "]"];
  let temp = [];
  for (let i = 0; i < s.length; i++) {
    if (symbols.indexOf(s[i]) <= 2) {
      temp.push(s[i]);
    } else {
      if (temp.length > 0) {
        if (symbols[symbols.indexOf(temp[temp.length - 1]) + 3] === s[i]) {
          temp.pop();
        } else {
          console.log(false);
          return;
        }
      } else {
        console.log(false);
        return;
      }
    }
  }
  if (temp.length > 0) {
    console.log(false);
    return;
  } else {
    console.log(true);
    return;
  }
}

isValid("{[]}");
isValid("()");
isValid("()[]{}");
isValid("(]");
isValid("([])");
isValid("([)]");
isValid("{}()[{()}]");
