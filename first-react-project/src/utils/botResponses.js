// src/utils/botResponses.js
import {
  countWords,
  countVowelsAndConsonants,
  mostFrequentLetter,
  reverseText,
  jumbleWords,
  toUppercase,
  toLowercase,
  capitalizeEachWord,
  countCharacters,
  removeVowels,
  removeConsonants,
  repeatWordsTwice,
  replaceSpacesWithUnderscores,
  shuffleCharacters,
} from './transformations';

// Array of transformation functions with their names
const transformations = [
  { name: 'Word Count', func: countWords },
  { name: 'Vowel and Consonant Count', func: countVowelsAndConsonants },
  { name: 'Most Frequent Letter', func: mostFrequentLetter },
  { name: 'Reversed Text', func: reverseText },
  { name: 'Jumbled Words', func: jumbleWords },
  { name: 'Uppercase Text', func: toUppercase },
  { name: 'Lowercase Text', func: toLowercase },
  { name: 'Capitalize Each Word', func: capitalizeEachWord },
  { name: 'Character Count', func: countCharacters },
  { name: 'Remove Vowels', func: removeVowels },
  { name: 'Remove Consonants', func: removeConsonants },
  { name: 'Repeat Words Twice', func: repeatWordsTwice },
  { name: 'Replace Spaces with Underscores', func: replaceSpacesWithUnderscores },
  { name: 'Shuffle Characters', func: shuffleCharacters },
];

// Function to generate a bot response based on the user's message
export const generateBotResponse = (userMessage) => {
  // Select a random transformation
  const randomTransformation = transformations[Math.floor(Math.random() * transformations.length)];
  const transformedText = randomTransformation.func(userMessage);

  // Create the bot's response
  const responseText = `${randomTransformation.name}: ${transformedText}`;
  
  return { sender: 'bot', text: responseText };
};
