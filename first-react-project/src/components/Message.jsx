// src/components/Message.jsx
import React from 'react';

function Message({ sender, text }) {
  return (
    <div className={`message ${sender}`}>
      {/* Display 'You' if the message is from the user, otherwise display 'Bot' */}
      <span className="message-sender">{sender === 'user' ? 'You' : 'Bot'}:</span> {text}
    </div>
  );
}

export default Message;