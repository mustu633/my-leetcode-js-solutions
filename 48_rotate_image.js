// 48. Rotate Image

// Solution

function rotate(matrix) {
  let temp = null;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[i].length; j++) {
      temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    let x = 0;
    let y = matrix[i].length - 1;
    while (x < y) {
      temp = matrix[i][x];
      matrix[i][x] = matrix[i][y];
      matrix[i][y] = temp;
      x++;
      y--;
    }
  }
  console.log(matrix);
  return;
}

rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
rotate([
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
]);
