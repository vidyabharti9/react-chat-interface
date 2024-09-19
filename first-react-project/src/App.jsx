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
      {/* Theme Switch */}
      <div className="theme-switch" onClick={toggleTheme}>
        <input type="checkbox" checked={!isDarkMode} readOnly />
        <span className="slider"></span>
      </div>
      <h1 className="chat-title">
        Chat with the bot
      </h1>

      <ChatWindow messages={messages} onSendMessage={handleSendMessage} />
    </div>
  );
}

export default App;
