import React, { Component } from 'react';
import CharList from './CharList.js';
import './styles/App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <CharList />
      </div>
    );
  }
}


export default App;