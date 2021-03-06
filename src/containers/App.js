import React, { Component } from 'react';
import './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: "1", name: "Jenny", age: "29" },
      { id: "2",name: "Barbara", age: "59" },
      { id: "3",name: "Alberto", age: "66" }
    ],
    username: 'jghvz8',
    showPersons: false
  }

  static getDerivedStateFromProps(props, state) {
    /*here you can also set the state if it depends on the props*/
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  deletePersonHandler = (personIndex) => {
    /* creates a new array, best practice */
    const persons = this.state.persons.slice();

    /*another way to create a new copy  
    const persons = [...this.state.persons];*/

    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  usernameChangedHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
    });

    const person = {...this.state.persons[personIndex]}
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  render() {
    console.log('[App.js] render');
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons 
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangedHandler}/>;
    }
    return (
        <div className="App">
          <Cockpit
            title = {this.props.appTitle}
            persons = {this.state.persons}
            showPersons = {this.state.showPersons}
            clicked = {this.togglePersonHandler}/>
          {persons}
        </div>      
    );
  }
}

export default App;
