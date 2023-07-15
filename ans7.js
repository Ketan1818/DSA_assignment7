function isBackspaceEqual(s, t) {
    const stackS = [];  // Stack for string s
    const stackT = [];  // Stack for string t
  
    // Helper function to process characters and update stack
    const processChar = (char, stack) => {
      if (char === '#') {
        stack.pop();  // Remove the last typed character
      } else {
        stack.push(char);  // Add the character to the stack
      }
    };
  
    // Process string s
    for (let i = 0; i < s.length; i++) {
      processChar(s[i], stackS);
    }
  
    // Process string t
    for (let i = 0; i < t.length; i++) {
      processChar(t[i], stackT);
    }
  
    // Compare the resulting strings
    return stackS.join('') === stackT.join('');
  }
  
  // Test case
  const s = 'ab#c';
  const t = 'ad#c';
  console.log(isBackspaceEqual(s, t));  // Output: true
  