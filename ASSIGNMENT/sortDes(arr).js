function sortDescending(arr) {
  return arr.sort(function(a, b) {
    return b - a;
  });
}

// Example usage:
var numbers = [5, 2, 9, 1, 5, 6];
var sortedDescending = sortDescending(numbers);
console.log(sortedDescending); // Output: [9, 6, 5, 5, 2, 1]
