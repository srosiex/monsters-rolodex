import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list-component'
import './App.css';
import { SearchBox } from './components/search-box/search-box.component'

class App extends Component {
  //class gives access to state

  constructor(){
    //calls constructor method on component class-gives access 
    //to this.state
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }


    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users}) )
    }


  //setState lets us modify this state object
  //takes obj with all of properties you want to change
  //re render() when setState is called and state is updated
  //arrow functions bind this
    handleChange = e => {
      this.setState({
        searchField: e.target.value
      })
    }


  render(){

    const { monsters, searchField } = this.state
    //same as const monsters = this.state.monsters;
    const filteredMonsters = monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))

  return (
    <div className="App">
          <h1>Monsters Rolodex</h1>
      <SearchBox 
        placeholder='search monsters'
        handleChange={this.handleChange}
        />
      <CardList monsters={filteredMonsters} />
    </div>
  );}
}

export default App;




{/* <button onClick={()=> this.setState({string: 'Hi'})} */}