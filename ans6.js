function canShiftString(s, goal) {
    if (s.length !== goal.length) {
      return false;  // Lengths are different, cannot become goal
    }
  
    const concatenated = s + s;
    return concatenated.includes(goal);
  }
  
  // Test case
  const s = 'abcde';
  const goal = 'cdeab';
  console.log(canShiftString(s, goal));  // Output: true
  