import React from 'react';
import './App.css';
import MainSection from './components/FirstSection/MainSection.js';
import SecondSection from './components/SecondSection/SecondSection';
import ThirdSection from './components/ThirdSection/ThirdSection';

const App = () => {
  return (
    <div className="App">
      <MainSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
};

export default App;
