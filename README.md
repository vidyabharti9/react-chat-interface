# React Chat Bot
This project is a React-based chatbot interface designed to resemble popular chat platforms like Slack and Discord. It supports both light and dark themes with various text transformations for chatbot responses. 

# Features
1. Responsive design: Adjusts to different screen sizes, ideal for laptop screens.
2. Chatbot interaction: Users can send messages and receive bot-generated responses with random text transformations.
3. Theme switching: Switch between light and dark modes.
4. Automatic scrolling: Chat window auto-scrolls to the latest message.

# Project Structure
```bash
src
├── assets
├── components
│   ├── ChatWindow.jsx  # Main chat interface component
│   └── Message.jsx     # Component for individual chat messages
│   └── Sidebar.jsx     # Component for sidebar
├── utils
│   └── botResponses.js # Contains functions for generating bot responses
│   └── transformations.js # Contains functions transformations
├── App.jsx             # Main application component
├── App.css             # Global styling for the app
└── index.css           # Base CSS styling
```

# Getting Started
**Prerequisites**
- Make sure you have the following installed on your machine:

    - Node.js (version 14 or higher)
    - npm (Node package manager)

**How to Run the React Chat Bot Project**
  
Clone the Repository
Open your terminal or command prompt. Run the following command to clone the project:
```bash
  git clone https://github.com/vidyabharti9/react-chat-interface.git
```
Navigate to the Project Directory by 
```bash
cd react-chat-interface
```
Make sure you have Node.js installed.
Install the required packages by running: 
```bash 
npm install
```
Now navigate to inside folder first-react-project by 
```bash
cd first-react-project
```
Now you can Start the development server with this command: 
```bash
npm run dev
```
Now, successfully you could see the chat bot interface!

# Interact with the Bot

Send messages and see the bot's responses.
Switch between light and dark modes using the toggle button.
Stop the Server, 
To stop the app, go back to the terminal and press Ctrl + C.

# Bot Text Transformations
The bot can respond with various text transformations, such as:

- Word Count
- Vowel and Consonant Count
- Most Frequent Letter
- Reversed Text
- Jumbled Words
- Uppercase/Lowercase Text
- Character Count
- Remove Vowels/Consonants
- Repeat Words Twice
- Replace Spaces with Underscores
- Shuffle Characters

# How to Use 
1. Type a message in the input box at the bottom of the chat window.
2. Hit the Enter key or click the Send button.
3. The bot will respond with a random transformation applied to your message.
4. Switch between dark and light themes using the button at the top-right corner.

# Screenshots
![Bot in dark](https://github.com/user-attachments/assets/6196eb05-b550-4104-858d-bef719568ae2)
![Bot in Light](https://github.com/user-attachments/assets/5c4d4e83-ec11-4cbb-a94d-df2f75d890ff)




# Contributing
Feel free to contribute by forking the project, making a pull request, or reporting issues.
