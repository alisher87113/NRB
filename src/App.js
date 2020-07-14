import React from 'react';
import './App.css';
import MainSection from './components/FirstSection/MainSection.js';
import SecondSection from './components/SecondSection/SecondSection';

const App = () => {
  return (
    <div className="App">
      <MainSection />
      <SecondSection />
    </div>
  );
};

export default App;
