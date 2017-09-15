import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Parent">
        
         <div className="Background">
        
        <div className="App">
          <div className="header">
        <h1><strong>Pokedex</strong></h1>
        </div>
        </div>
          <div className="buttons">
            <button>I am button 1</button>
            <button>I am button 2</button>
            <button>I am button 3</button>
            

          </div>

        <div className="contain">
            <div className="contained">I am a little box</div>
            <div className="contained"> I am another box</div>
            <div className="contained"> I am another box</div>
            <div className="contained">I am a little box</div>
            <div className="contained"> I am another box</div>
            <div className="contained"> I am another box</div>
            <div className="contained">I am a little box</div>
            <div className="contained"> I am another box</div>
            <div className="contained"> I am another box</div>
            <div className="contained">I am a little box</div>
            <div className="contained"> I am another box</div>
            <div className="contained"> I am another box</div>
          </div>
        
        
        </div>
          
        
      </div>
    );
  }
}

export default App;
