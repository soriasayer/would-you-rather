import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import '../App.css';
import Answer from './Answer';
import NewQuestion from './NewQuestion';
import LoginPage from './LoginPage';
import Results from './Results';
import LeaderBoard from './LeaderBoard';
import Navbar from './Navbar';
import QuestionsTab from './QuestionsTab';



function App() {
  return (
    <div>
      <Navbar />
      <QuestionsTab />
    </div>
  );
}

export default App;
