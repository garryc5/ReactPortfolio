import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import SkillsSpotLight from '../../components/SkillsSpotLight/SkillSpotLight'
import NavBar from '../../components/NavBar/NavBar'
import PageSplit from '../../components/PageSplit/PageSplit'
import AboutMe from '../../components/AboutMe/AboutMe'
import CustomFooter from '../../components/footer/footer'
import Photography from '../photography/photography'
import Code from '../code/Code'
import Home from '../home/Home'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AboutMe/>
      </header>
        <PageSplit />
        <SkillsSpotLight />
        <Switch>
        <Route exact path='/' render={() =>    
        <>
        <NavBar />
        <Home id="cards" />
        </>
        }/>
        <Route exact path='/photos' render={() =>    
        <>
        <NavBar />
        <Photography id="cards" />
        </>
        }/>
        <Route exact path='/code' render={() =>
        <>
        <NavBar />
        <Code />
        </>
        }/>
        </Switch>
        <CustomFooter />
        </div>
  );
}

export default App;
