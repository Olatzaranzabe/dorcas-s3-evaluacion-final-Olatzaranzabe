import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import './App.css';
import CharacterList from './CharacterList';
import Filters from './Filters';
import Detail from './Detail';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      characters: [],
      charactersFiltered: [],
      name: '',
      charactersWithId: [],
      charactersCopyWithId: []

    }
    this.handleSearchCharacters = this.handleSearchCharacters.bind(this)
    this.handleSelectCharacter = this.handleSelectCharacter.bind(this)

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
        },
          this.addID
        )


      });
  }
  addID() {
    const arrayCopy = [...this.state.characters]
    for (let i = 0; i < arrayCopy.length; i++) {
      arrayCopy[i] = {
        ...arrayCopy[i],
        ID: i
      }
      this.setState({ charactersCopyWithId: arrayCopy })

    }
  console.log(this.state.charactersCopyWithId)
  }

  handleSearchCharacters(event) {
    console.log(event.target.value)
    const inputValue = event.target.value

    this.setState({
      name: inputValue
    });
    const characters = [...this.state.characters]

    const charactersFiltered = characters.filter(function (characters) {
      return characters.name.includes(inputValue)
    })
    console.log(charactersFiltered)
    this.setState({ charactersFiltered: charactersFiltered })
  }

  handleSelectCharacter() {
    console.log('holi')
  }

  render() {
    console.log(this.state.arrayCopy)
    const { characters } = this.state
    const { charactersCopyWithId } = this.state
    console.log(this.state.charactersFiltered)
    console.log(this.state.charactersCopyWithId)
    return (
      <div className="App">
        <Header />
        <Filters onInputChange={this.handleSearchCharacters} name={this.state.name} characters={characters} />
        <Switch>
          <Route exact path='/' render={(props) => <CharacterList characters={characters} charactersFiltered={this.state.charactersFiltered} />
          } />
          <Route path='/character/:ID' render={() =>
            <Detail onSelectCharacter={this.handleSelectCharacter} charactersCopyWithId={this.state.charactersCopyWithId} characters={characters} dateOfBirth={this.dateOfBirth} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
