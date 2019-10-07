import React from 'react';
import NavigationBar from './Components/NavigationBar';
import HeaderContent from './Components/HeaderContent';
import MainContent from './Components/MainContent';
import FooterBar from './Components/FooterBar';

class App extends React.Component {
  componentDidMount() {
    document.getElementById("Select1").value = "BTC";
    document.getElementById("Select2").value = "USD";
  }
  render() {
    return (
      <div className="bg-secondary">
        <NavigationBar />
        <HeaderContent />
        <MainContent />
        <FooterBar />
      </div>
    );
  }
}

export default App;
