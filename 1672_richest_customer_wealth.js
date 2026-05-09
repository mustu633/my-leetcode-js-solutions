// 1672. Richest Customer Wealth

// Solution

function maximumWealth(accounts) {
  let customerWealths = [];
  for (let i = 0; i <= accounts.length - 1; i++) {
    let iWealth = 0;
    for (let j = 0; j <= accounts[i].length - 1; j++) {
      iWealth = iWealth + accounts[i][j];
    }
    customerWealths = [...customerWealths, iWealth];
  }
  let result = 0;
  for (let i = 0; i <= customerWealths.length - 1; i++) {
    if (customerWealths[i] >= result) {
      result = customerWealths[i];
    }
  }

  console.log(result);
  return;
}

maximumWealth([
  [1, 2, 3],
  [3, 2, 1],
]);
maximumWealth([
  [1, 5],
  [7, 3],
  [3, 5],
]);
maximumWealth([
  [2, 8, 7],
  [7, 1, 3],
  [1, 9, 5],
]);
