import React, { Component } from 'react';
import Header from './Header';
import './App.css';
import CharacterList from './CharacterList';
import Filters from './Filters';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    this.fetchHarryPotter();
  }
  fetchHarryPotter() {
    fetch('http://hp-api.herokuapp.com/api/characters')
    .then((response) => response.json())
    .then((jsoncharacters) => {
      this.setState({
        characters: jsoncharacters
      });
      console.log(jsoncharacters)
     
    });
  }
  render() {
    const {characters} = this.state
    return (
      <div className="App">
        <Header />
        <CharacterList characters={characters} />

      </div>
    );
  }
}

export default App;
