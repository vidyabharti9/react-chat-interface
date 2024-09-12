// src/components/Message.jsx
import React from 'react';

function Message({ sender, text }) {
  return (
    <div className={`message ${sender}`}>
      <span className="message-sender">{sender === 'user' ? 'You' : 'Bot'}:</span> {text}
    </div>
  );
}

export default Message;
