import React, { Component } from 'react';
import Header from './Header';
import './App.css';
import CharacterList from './CharacterList';
import Filters from './Filters';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      characters: [],
      someCharacters:[],
      name: ''
    }
    this.handleSearchCharacters = this.handleSearchCharacters.bind(this)
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

  handleSearchCharacters(event) {
    console.log(event.target.value)
    const inputValue = event.target.value

    this.setState({
      name: inputValue
    });
    const characters = [...this.state.characters]
    
    const charactersFiltered = characters.filter(function(characters){
      return characters.name.includes(inputValue)
    })
    console.log(charactersFiltered)
  }

  render() {
    const { characters } = this.state

    return (
      <div className="App">
        <Header />
        <Filters onInputChange={this.handleSearchCharacters} name={this.state.name} characters={characters} />
        <CharacterList characters={characters} />

      </div>
    );
  }
}

export default App;
