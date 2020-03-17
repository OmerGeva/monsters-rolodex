import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox} from './components/search-box/search-box.component'

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ""
    }
  }

  componentDidMount(){
    // NOT SECURE -- DOESNT WORK
    // fetch('https://jsonplaceholder.typicode.com/users')
    //  .then(response => response.json())
    //  .then(users => this.setState({monsters: users}))

      this.setState(
        {monsters: [
    {
    "id": 1,
    "name": "Leanne Graham",
    "email": "Sincere@april.biz",
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "email": "Shanna@melissa.tv",

  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "email": "Nathan@yesenia.net",

  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "email": "Julianne.OConner@kory.org",

  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "email": "Lucio_Hettinger@annie.ca",

  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "email": "Karley_Dach@jasper.info",

  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "email": "Telly.Hoeger@billy.biz",

  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "email": "Sherwood@rosamond.me",

  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "email": "Chaim_McDermott@dana.io",

  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "email": "Rey.Padberg@karina.biz",

  }
  ]})
  }

  handleChange = (event) => {
    this.setState({searchField: event.target.value })
  }

  render(){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
        placeholder="Search Monsters"
        handleChange={this.handleChange}/>

        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
