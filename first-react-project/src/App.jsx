// src/App.js
import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import Sidebar from './components/Sidebar';
import { generateBotResponse } from './utils/botResponses';
import './App.css';

function App() {
  // Initialize state to store chat messages, starting with a bot's greeting message
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi Golu Bot here!. Give me any kind of message, I will make amazing transformations for you!' },]);

  // Function to handle sending messages
  const handleSendMessage = (messageText) => {
    const userMessage = { sender: 'user', text: messageText };
    setMessages((prevMessages) => [...prevMessages, userMessage]); // Add only user message first
  
    const botResponse = generateBotResponse(messageText);
    
    // Simulate a small delay before adding the bot's response (for realism)
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, botResponse]); // Add bot response after user message
    }, 900); 
  };
  
  return (
    <div className="app-container">
      <Sidebar />
      <ChatWindow messages={messages} onSendMessage={handleSendMessage} />
    </div>
  );
}

export default App;
