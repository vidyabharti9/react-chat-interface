// src/App.jsx
import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import './App.css';

function App() {
  // State to hold all messages in the chat
  const [messages, setMessages] = useState([]);

  // Function to handle when a user sends a message
  const handleSendMessage = (userMessage) => {
    const newMessage = { sender: 'user', text: userMessage };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // Simulate a bot response after 1 second delay
    setTimeout(() => {
      const botMessage = generateBotResponse(userMessage);
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000);
  };

  // Function to generate bot response based on user message
  const generateBotResponse = (userMessage) => {
    // Apply all transformations
    const wordCount = countWords(userMessage);
    const vowelConsonantCount = countVowelsAndConsonants(userMessage);
    const frequentLetter = mostFrequentLetter(userMessage);
    const reversedText = reverseText(userMessage);
    const jumbledWords = jumbleWords(userMessage);
    const uppercaseText = toUppercase(userMessage);
    const lowercaseText = toLowercase(userMessage);

    // Create a combined response
    const responseText = `
      Word Count: ${wordCount}\n
      Vowel and Consonant Count: ${vowelConsonantCount}
      Most Frequent Letter: ${frequentLetter}
      Reversed Text: ${reversedText}
      Jumbled Words: ${jumbledWords}
      Uppercase Text: ${uppercaseText}
      Lowercase Text: ${lowercaseText}
    `;

    return { sender: 'bot', text: responseText };
  };

  // Transformation functions
  const countWords = (text) => text.split(' ').filter(word => word !== '').length;
  const countVowelsAndConsonants = (text) => {
    const vowels = text.match(/[aeiou]/gi) || [];
    const consonants = text.match(/[bcdfghjklmnpqrstvwxyz]/gi) || [];
    return `Vowels: ${vowels.length}, Consonants: ${consonants.length}`;
  };
  const mostFrequentLetter = (text) => {
    const frequency = {};
    text.replace(/[^a-zA-Z]/g, '').split('').forEach(char => {
      char = char.toLowerCase();
      frequency[char] = (frequency[char] || 0) + 1;
    });
    const maxFreqChar = Object.keys(frequency).reduce((a, b) => frequency[a] > frequency[b] ? a : b, '');
    return `${maxFreqChar} (${frequency[maxFreqChar]})`;
  };
  const reverseText = (text) => text.split('').reverse().join('');
  const jumbleWords = (text) => text.split(' ').map(word => word.split('').sort(() => Math.random() - 0.5).join('')).join(' ');
  const toUppercase = (text) => text.toUpperCase();
  const toLowercase = (text) => text.toLowerCase();

  return (
    <div className="App">
      <ChatWindow messages={messages} onSendMessage={handleSendMessage} />
    </div>
  );
}

export default App;
