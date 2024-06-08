function arrayMap(items, targetSum) {
  let left = 0; 
  let sum = 0;

  for (let right = 0; right < items.length; right++) {
    sum += items[right];

    while (sum > targetSum) {
      sum -= items[left];
      left++;
    }

    if (sum === targetSum) {
      return true;
    }
  }

  return false;
}
