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
  
  export const generateBotResponse = (userMessage) => {
    const transformations = [
      { name: 'Word Count', func: countWords(userMessage) },
      { name: 'Vowel and Consonant Count', func: countVowelsAndConsonants(userMessage) },
      { name: 'Most Frequent Letter', func: mostFrequentLetter(userMessage) },
      { name: 'Reversed Text', func: reverseText(userMessage) },
      { name: 'Jumbled Words', func: jumbleWords(userMessage) },
      { name: 'Uppercase Text', func: toUppercase(userMessage) },
      { name: 'Lowercase Text', func: toLowercase(userMessage) },
      { name: 'Capitalize Each Word', func: capitalizeEachWord(userMessage) },
      { name: 'Character Count', func: countCharacters(userMessage) },
      { name: 'Remove Vowels', func: removeVowels(userMessage) },
      { name: 'Remove Consonants', func: removeConsonants(userMessage) },
      { name: 'Repeat Words Twice', func: repeatWordsTwice(userMessage) },
      { name: 'Replace Spaces with Underscores', func: replaceSpacesWithUnderscores(userMessage) },
      { name: 'Shuffle Characters', func: shuffleCharacters(userMessage) },
    ];
  
    const randomTransformation = transformations[Math.floor(Math.random() * transformations.length)];
    const responseText = `${randomTransformation.name}: ${randomTransformation.func}`;
    
    return { sender: 'bot', text: responseText };
  };
  