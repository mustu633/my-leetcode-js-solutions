// 1769. Minimum Number of Operations to Move All Balls to Each Box

// Solution

function minOperations(boxes) {
  let answer = [];
  let x = 0;
  for (let i = 0; i < boxes.length; i++) {
    for (let j = 0; j < boxes.length; j++) {
      if (i != j) {
        if (boxes[j] > 0) {
          if (i > j) {
            x = x + (i - j);
          }
          if (i < j) {
            x = x + (j - i);
          }
        }
      }
    }
    answer.push(x);
    x = 0;
  }

  console.log(answer);
  return;
}

minOperations("110");
minOperations("001011");
