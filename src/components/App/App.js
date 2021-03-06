import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    newRun: '',
    recentRun: 0,
    longestRun: 0,
  }


  handleMilesChange = (event) => {
    this.setState({
      newRun: event.target.value
    })
   
  }


  handleClick = () => {
    console.log('submit button clicked');
    if(Number(this.state.newRun) > Number(this.state.longestRun)){
      this.setState({
        recentRun: this.state.newRun,
        longestRun: this.state.newRun,
        newRun: '',
      })
    } else {
      this.setState({
        recentRun: this.state.newRun,
        longestRun: this.state.longestRun,
        newRun: '',
      })
    }
    
  }


  render() {
    return (
      <div className="parent">
        
          <header>
            <h1>React Track Runner</h1>
          </header>

          <input
            type="number"
            value={this.state.newRun}
            placeholder="Miles Ran"
            onChange={this.handleMilesChange}
          />

          <button onClick={this.handleClick}>Submit</button>
          
          <div>Recent Run: {this.state.recentRun}</div>
          <div> Longest Run: {this.state.longestRun}</div>
       
      </div>
    
    );
  }
}

export default App;