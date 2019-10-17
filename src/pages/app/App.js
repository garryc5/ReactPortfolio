import React from 'react';
import logo from '../../logo.svg';
import SkillsSpotLight from '../../components/SkillsSpotLight/SkillSpotLight'
import NavBar from '../../components/NavBar/NavBar'
import PageSplit from '../../components/PageSplit/PageSplit'
import CodeSandBoxCard from '../../components/CodesandboxCard/CodeSandBoxCard'
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
        <div id ="cards">
        <CodeSandBoxCard
        iframe="https://codesandbox.io/embed/cos-is-cool-lsfo7?fontsize=14"
        />
        <CodeSandBoxCard
        iframe="https://codesandbox.io/embed/happy-b-day-fcsfy?fontsize=14"
        />
        <CodeSandBoxCard
        iframe ="https://codesandbox.io/embed/pie-6fwd7?fontsize=14" 
        />
        <CodeSandBoxCard
        iframe ="https://codesandbox.io/embed/tetris-js-cir2l?fontsize=14"
        />
        <CodeSandBoxCard
        iframe ="https://codesandbox.io/embed/festive-minsky-hvm5f?fontsize=14"
        />
        </div>
        </div>
  );
}

export default App;
