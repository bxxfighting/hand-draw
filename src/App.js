import React, { Component } from 'react';
import './App.css';
import DrawPad from './containers/DrawPad';
import LatexBox from './containers/LatexBox';

class App extends Component {
  render() {
    return (
      <div>
        <LatexBox />
        <DrawPad
          minWidth='2.5'
          clearButton='true'
        />
      </div>
    );
  }
}

export default App;
