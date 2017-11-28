import React, { Component } from 'react';
import './App.css';
import '@/static/css/reset.css';
// import HeaderBar from '@/components/HeaderBar'
// import FooterBar from '@/components/FooterBar';
// import LunBo from '@/components/LunBo';
// import NavBar from '@/components/NavBar';
// import HomeList from '@/components/HomeList';
import Add from '@/components/Add';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <HeaderBar></HeaderBar>
        <LunBo></LunBo>
        <NavBar></NavBar>
        <HomeList></HomeList>
        <FooterBar></FooterBar> */}
        <Add></Add>
      </div>
    );
  }
}

export default App;
