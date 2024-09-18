// src/utils/transformations.js
export const countWords = (text) => text.split(' ').filter(word => word !== '').length;

export const countVowelsAndConsonants = (text) => {
  const vowels = text.match(/[aeiou]/gi) || [];
  const consonants = text.match(/[bcdfghjklmnpqrstvwxyz]/gi) || [];
  return `Vowels: ${vowels.length}, Consonants: ${consonants.length}`;
};

export const mostFrequentLetter = (text) => {
  const frequency = {};
  text.replace(/[^a-zA-Z]/g, '').split('').forEach(char => {
    char = char.toLowerCase();
    frequency[char] = (frequency[char] || 0) + 1;
  });
  const maxFreqChar = Object.keys(frequency).reduce((a, b) => frequency[a] > frequency[b] ? a : b, '');
  return `${maxFreqChar} (${frequency[maxFreqChar]})`;
};

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
