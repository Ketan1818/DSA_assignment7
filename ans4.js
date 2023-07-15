function reverseWords(s) {
    // Split the sentence into words
    const words = s.split(' ');
  
    // Reverse each word
    const reversedWords = words.map(word => {
      return word.split('').reverse().join('');
    });
  
    // Join the reversed words back into a sentence
    const reversedSentence = reversedWords.join(' ');
  
    return reversedSentence;
  }
  
  // Test case
  const s = "Let's take LeetCode contest";
  console.log(reverseWords(s));  // Output: "s'teL ekat edoCteeL tsetnoc"
  