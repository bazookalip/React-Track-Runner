import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    runInput: 0,
    recentRun: 0,
    longestRun: 0,
  }


  handleMilesChange = (event) => {
    // console.log('input',event.target.value);
    this.setState({
      runInput: Number(event.target.value),
    });
  }


  handleClick = () => {
    console.log('submit button clicked');
    if (this.state.runInput > this.state.longestRun) {
      this.setState({
        recentRun: this.state.runInput,
        longestRun: this.state.runInput,
      });
    } else {
      this.setState({
        recentRun: this.state.runInput,
      });
    }
    console.log(this.state);
  }


  render() {
    return (
      <div className="parent">
        
          <header>
            <h1>React Track Runner</h1>
          </header>

          <input
            type="number"
            placeholder="Miles Ran"
            onChange={this.handleMilesChange}
          // value={this.state.user.name}
          />
          <button onClick={this.handleClick}>Submit</button>
          
          <div className="run">
            Recent Run: {this.state.recentRun}
          </div>
          <div className="run">
            Longest Run: {this.state.longestRun}
          </div>
       
      </div>
    
    );
  }
}

export default App;