import React, { Component } from 'react';
import './App.css';
import Person from './persen';

class App extends Component {
  constructor() {
    super();
    this.state = {
      show : false
    }
  }



  render() {
   

    return (
      <div className="App">
        <button onClick={()=> this.setState({show : !this.state.show })}>enzel lena ya hbib</button>
        {this.state.show && <Person/>}
      
      </div>
    );
  }
}


export default App;