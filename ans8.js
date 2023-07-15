function isomorphic(s, t) {
    // Create a mapping of characters from s to characters in t.
    const mapping = {};
    for (let i = 0; i < s.length; i++) {
      if (!mapping.hasOwnProperty(s[i])) {
        mapping[s[i]] = t[i];
      } else if (mapping[s[i]] !== t[i]) {
        return false;
      }
    }
    return true;
  }
  
  // Driver code.
  const s = "egg";
  const t = "add";
  const isomorphic = isomorphic(s, t);
  console.log(isomorphic); // true
  