// src/App.jsx
import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import { generateBotResponse } from './utils/botResponses';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleSendMessage = (userMessage) => {
    const newMessage = { sender: 'user', text: userMessage };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    setTimeout(() => {
      const botMessage = generateBotResponse(userMessage);
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      <button onClick={toggleTheme}>
        Switch to {isDarkMode ? 'Light' : 'Dark'} Theme
      </button>

      <ChatWindow messages={messages} onSendMessage={handleSendMessage} />
    </div>
  );
}

export default App;
