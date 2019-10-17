import React from 'react';
import logo from '../../logo.svg';
import SkillsSpotLight from '../../components/SkillsSpotLight/SkillSpotLight'
import NavBar from '../../components/NavBar/NavBar'
import PageSplit from '../../components/PageSplit/PageSplit'
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NavBar />
      </header>
        <PageSplit />
        <SkillsSpotLight />
        <SkillsSpotLight />
        <SkillsSpotLight />
        <SkillsSpotLight />
        <SkillsSpotLight />
        <SkillsSpotLight />
        <SkillsSpotLight />
        <SkillsSpotLight />
        <SkillsSpotLight />
        </div>
  );
}

export default App;
