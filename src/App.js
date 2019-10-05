import React from 'react';
import NavigationBar from './Components/NavigationBar';
import HeaderContent from './Components/HeaderContent';
import MainContent from './Components/MainContent';
import FooterBar from './Components/FooterBar';

function App() {
  return (
    <div>
      <NavigationBar />
      <HeaderContent />
      <MainContent />
      <FooterBar />
    </div>
  );
}

export default App;
