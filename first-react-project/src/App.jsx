// src/App.jsx
import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import { generateBotResponse } from './utils/botResponses';
import './App.css';

function App() {
  // State to hold chat messages, initialized as an empty array
  const [messages, setMessages] = useState([]);
  // State to handle the current theme mode (dark mode by default)
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Function to handle when the user sends a message
  const handleSendMessage = (userMessage) => {
    // Create a new message object with sender as 'user' and the text as userMessage
    const newMessage = { sender: 'user', text: userMessage };
    // Update the messages state to include the new user message
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    setTimeout(() => {
      const botMessage = generateBotResponse(userMessage);
      // Update the messages state to include the bot's response
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 900);
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
      {/* Chat Window Component where messages are displayed and input is taken */}
      <ChatWindow messages={messages} onSendMessage={handleSendMessage} />
    </div>
  );
}

export default App;
