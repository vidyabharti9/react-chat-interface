// src/components/Message.jsx
import React from 'react';
// Functional component for displaying individual messages
function Message({ sender, text }) {
  return (
    <div className={`message ${sender}`}>
      {/* Dynamically display 'You' for user messages and 'Bot' for bot messages */}
      <span className="message-sender">{sender === 'user' ? 'You' : 'Bot'}:</span> {text}
    </div>
  );
}

export default Message; 
