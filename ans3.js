function addStrings(num1, num2) {
    let result = '';
    let carry = 0;
    let i = num1.length - 1;
    let j = num2.length - 1;
  
    while (i >= 0 || j >= 0 || carry > 0) {
      const digit1 = i >= 0 ? parseInt(num1.charAt(i)) : 0;
      const digit2 = j >= 0 ? parseInt(num2.charAt(j)) : 0;
  
      const sum = digit1 + digit2 + carry;
      const digitSum = sum % 10;
      carry = Math.floor(sum / 10);
  
      result = digitSum.toString() + result;
  
      i--;
      j--;
    }
  
    return result;
  }
  
  // Test case
  const num1 = '11';
  const num2 = '123';
  console.log(addStrings(num1, num2));  // Output: "134"
  