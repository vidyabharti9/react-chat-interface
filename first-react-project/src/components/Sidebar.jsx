import React, { useState, useEffect } from 'react';

// Array of users with name and profile picture information
const users = [
  { name: 'Ankita Pancholi', profilePic: 'ankita.jpg'},
  { name: 'Vidya Bharti', profilePic: 'vidya.jpg'},
];

// Array of group names
const groups = ['Project A', 'Design Team', 'Developers'];

function Sidebar() {
    // State for dark mode, initializing from localStorage or defaulting to light mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Get the current theme from localStorage or default to light mode
    return localStorage.getItem('theme') === 'dark';
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      // Save the new mode in localStorage
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  // Effect to apply the correct theme class (dark/light) to the body element when the theme changes

  useEffect(() => {
    // Apply the theme class to the body element
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  return (
    <div className="sidebar">
      <h2>Users</h2>
      <ul className="user-list">
        {users.map((user, index) => (
          <li key={index}>
            <img src={user.profilePic} alt={user.name} className="profile-pic" />
            {user.name}
          </li>
        ))}
      </ul>

      <h2>Groups</h2>
      <ul className="group-list">
        {groups.map((group, index) => (
          <li key={index}>{group}</li>
        ))}
      </ul>
    
    {/* Toggle button for switching between dark and light mode */}
      <div className="toggle-container">
        <button onClick={toggleDarkMode}>
          Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
