import React, { useState, useEffect, useRef } from 'react';
import Message from './Message';

function ChatWindow({ messages, onSendMessage }) {
  const [inputText, setInputText] = useState('');
  
  // Ref for the message container to enable auto-scrolling
  const messageEndRef = useRef(null);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendClick = () => {
    if (inputText.trim() !== '') {
      onSendMessage(inputText);
      setInputText('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendClick(); // Call the send function when Enter is pressed
    }
  };

  // Function to scroll to the bottom of the messages container
  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll to bottom whenever messages are updated
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chat-window">
      <div className="message-container">
        {/* Render each message by mapping over the 'messages' array */}
        {messages.map((msg, index) => (
          <Message key={index} sender={msg.sender} text={msg.text} />
        ))}
        {/* Empty div to act as a reference for auto-scrolling */}
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
