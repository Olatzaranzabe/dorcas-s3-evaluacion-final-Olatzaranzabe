import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import CharacterList from './CharacterList';
import Filters from './Filters';
import Detail from './Detail';
import Contador from './Contador'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      characters: [],
      charactersFiltered: [],
      name: '',
      charactersCopyWithId: [],
      id: '',
      contador:0
    }
    this.handleSearchCharacters = this.handleSearchCharacters.bind(this)
    this.addID = this.addID.bind(this)
    this.clickElement =this.clickElement.bind(this)
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
    const charactersCopyWithId = [...this.state.charactersCopyWithId]

    const charactersFiltered = charactersCopyWithId.filter(function (charactersCopyWithId) {
      return charactersCopyWithId.name.toLowerCase().includes(inputValue.toLowerCase())
    })
    console.log(charactersFiltered)
    this.setState({ charactersFiltered: charactersFiltered })
  }
  clickElement(){
    this.setState({contador: (this.state.contador)+1 })
  }

  render() {
    const { characters } = this.state
    const { charactersCopyWithId } = this.state
    console.log(this.state.charactersFiltered)
    console.log(charactersCopyWithId)
    return (
      <div className="App">
        <Header />
        <Contador value={this.state.contador}/>
        <Filters 
        onInputChange={this.handleSearchCharacters} 
        name={this.state.name} 
        characters={characters} />
        <Switch>
          <Route
            exact path='/'
            render={(props) => <CharacterList
              clickElement={this.clickElement}
              charactersCopyWithId={charactersCopyWithId}
              charactersFiltered={this.state.charactersFiltered} />
            } />
          <Route
            path='/character/:id' 
            render={(props) =>
              <Detail 
              onSelectCharacter={this.handleSelectCharacter} 
              match={props.match} 
              charactersCopyWithId={charactersCopyWithId} 
              characters={characters} />}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
