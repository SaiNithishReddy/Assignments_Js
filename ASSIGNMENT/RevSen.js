// Use the readline module to take user input
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a sentence: ', (sentence) => {
  // Function to reverse every word in the sentence
  function reverseWords(sentence) {
    const words = sentence.split(' ');

    const reversedWords = words.map(function(word) {
      return word.split('').reverse().join('');
    });

    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
  }

  const reversedSentence = reverseWords(sentence);
  console.log('Reversed Sentence: ' + reversedSentence);

  rl.close();
});
