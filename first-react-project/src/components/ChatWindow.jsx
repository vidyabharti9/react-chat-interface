import React, { useState, useEffect, useRef } from 'react';
import Message from './Message';
function ChatWindow({ messages, onSendMessage }) {
  const [inputText, setInputText] = useState('');
  const messageEndRef = useRef(null); // Reference for scrolling to the bottom of the message list

  // Handle changes in the input field
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendClick = () => {
    if (inputText.trim() !== '') { // Ensure input is not just whitespace
      onSendMessage(inputText); // Call the parent function to handle message sending
      setInputText(''); // Clear the input after sending
    }
  };

  // Handle pressing the Enter key for sending messages
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendClick();
    }
  };

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Effect to scroll to the bottom whenever messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chat-window">
      <div className="message-container">
        {messages.map((msg, index) => (
          <Message key={index} sender={msg.sender} text={msg.text} />
        ))}
        <div ref={messageEndRef} />
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
        />
        <button onClick={handleSendClick}>Send</button>
      </div>
    </div>
  );
}

export default ChatWindow;
