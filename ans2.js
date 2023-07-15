function isStrobogrammatic(num) {
    // Create a map to store the strobogrammatic digits
    const mapping = {
      '0': '0',
      '1': '1',
      '6': '9',
      '8': '8',
      '9': '6'
    };
  
    let left = 0;
    let right = num.length - 1;
  
    while (left <= right) {
      // If the digits at left and right positions are not strobogrammatic, return false
      if (!(num[left] in mapping) || mapping[num[left]] !== num[right]) {
        return false;
      }
      // Move the pointers
      left++;
      right--;
    }
  
    // All digits are strobogrammatic, so return true
    return true;
  }
  
  // Test case
  const num = '69';
  console.log(isStrobogrammatic(num));  // Output: true
  