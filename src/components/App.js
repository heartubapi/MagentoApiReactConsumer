import React, { Component } from 'react';

import './App.css';
import News from './magento/Orders';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Magento 2 - ReactJS</h1>
          <h2 className="App-title">Magento API</h2>
        </header>

        <News />

      </div>
    );
  }
}

export default App;
