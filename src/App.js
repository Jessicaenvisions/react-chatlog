import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [chatLogList, setchatLogList] = useState([]);
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog chatLogList={chatMessages} />
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}{' '}
      </main>
    </div>
  );
};

export default App;
