import React, { Component } from 'react';
import Header from '../Header/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <input
        placeholder="Miles Ran"
        type="number"
    //    onChange={event.target.value}
        />
        <button>Add New Run</button>
       <p>Recent Run:</p>
       <p>Longest Run:</p>
        
      </div>
    );
  }
}

export default App;
