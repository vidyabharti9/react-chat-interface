// src/utils/transformations.js
// Function to count the number of words in the given text
export const countWords = (text) => text.split(' ').filter(word => word !== '').length;

// Function to count the number of vowels and consonants in the given text
export const countVowelsAndConsonants = (text) => {
  // Match all vowels (case-insensitive) and consonants in the text
  const vowels = text.match(/[aeiou]/gi) || [];
  const consonants = text.match(/[bcdfghjklmnpqrstvwxyz]/gi) || [];

  // Return the count of vowels and consonants in the format "Vowels: X, Consonants: Y"
  return `Vowels: ${vowels.length}, Consonants: ${consonants.length}`;
};

export const mostFrequentLetter = (text) => {
  const frequency = {};

  // Remove non-alphabet characters, convert to lowercase, and split into an array of characters
  text.replace(/[^a-zA-Z]/g, '').split('').forEach(char => {
    char = char.toLowerCase();
    frequency[char] = (frequency[char] || 0) + 1;
  });
  const maxFreqChar = Object.keys(frequency).reduce((a, b) => frequency[a] > frequency[b] ? a : b, '');
  return `${maxFreqChar} (${frequency[maxFreqChar]})`;
};

//func for various transformation.
export const reverseText = (text) => text.split('').reverse().join('');
export const jumbleWords = (text) => text.split(' ').map(word => word.split('').sort(() => Math.random() - 0.5).join('')).join(' ');
export const toUppercase = (text) => text.toUpperCase();
export const toLowercase = (text) => text.toLowerCase();
export const capitalizeEachWord = (text) => text.replace(/\b\w/g, char => char.toUpperCase());
export const countCharacters = (text) => text.length;
export const removeVowels = (text) => text.replace(/[aeiou]/gi, '');
export const removeConsonants = (text) => text.replace(/[bcdfghjklmnpqrstvwxyz]/gi, '');
export const repeatWordsTwice = (text) => text.split(' ').map(word => `${word} ${word}`).join(' ');
export const replaceSpacesWithUnderscores = (text) => text.replace(/\s/g, '_');
export const shuffleCharacters = (text) => text.split(' ').map(word => word.split('').sort(() => Math.random() - 0.5).join('')).join(' ');
