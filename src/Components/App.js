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
      charactersCopyWithId: [],
      id:''
    }

    this.handleSearchCharacters = this.handleSearchCharacters.bind(this)
    this.handleSelectCharacter = this.handleSelectCharacter.bind(this)
    this.addID = this.addID.bind(this)
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
    let charactersCopyWithId = []
    for (let i = 0; i < arrayCopy.length; i++) {
     charactersCopyWithId[i] = {
        ...arrayCopy[i],
        id: i
      }

      this.setState({ charactersCopyWithId: charactersCopyWithId })

    }
    console.log(this.state.charactersCopyWithId)
    console.log(arrayCopy)
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
    const { characters } = this.state
    const { charactersCopyWithId } = this.state
    console.log(this.state.charactersFiltered)
    console.log(charactersCopyWithId)
    return (
      <div className="App">
        <Header />
        <Filters onInputChange={this.handleSearchCharacters} name={this.state.name} characters={characters} />
        <Switch>
          <Route exact path='/' render={(props) => <CharacterList charactersCopyWithId={charactersCopyWithId} charactersFiltered={this.state.charactersFiltered} />
          } />
          <Route path='/character/:id' render={(props) =>
            <Detail onSelectCharacter={this.handleSelectCharacter} match={props.match} charactersCopyWithId={charactersCopyWithId} characters={characters}  />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
