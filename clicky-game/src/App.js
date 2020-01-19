import React, {Component} from 'react';
//import Header from "./Components/Header"
import Wrapper from './Components/Wrapper';
import Grid from "./Components/Grid"
import './App.css';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Grid />
      </Wrapper>
    );
  }
}



export default App;
