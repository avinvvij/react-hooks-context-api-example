import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EnterCity from './Components/EnterCity.jsx'
import CityList from './Components/CityList.jsx'
import {appContext}  from './Config/RootProvider'
import RootProvider from './Config/RootProvider'

class App extends Component {
  render() {
    return (
      <RootProvider>
        <div className="App">
          <EnterCity />
          <CityList />
        </div>
      </RootProvider>
    );
  }
}

export default App;
