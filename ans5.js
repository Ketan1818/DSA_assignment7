function reverseStr(s, k) {
    const arr = s.split('');  // Convert string to array for easier manipulation
  
    for (let i = 0; i < arr.length; i += 2 * k) {
      let left = i;                   // Left pointer
      let right = Math.min(i + k - 1, arr.length - 1);  // Right pointer, limited to the string length or k characters
  
      while (left < right) {
        // Swap characters at left and right positions
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
  
        left++;
        right--;
      }
    }
  
    return arr.join('');  // Convert array back to string
  }
  
  // Test case
  const s = 'abcdefg';
  const k = 2;
  console.log(reverseStr(s, k));  // Output: "bacdfeg"
  