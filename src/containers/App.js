import React, { Component } from 'react';
import './App.css';

import Person from '../components/Persons/Person/Person';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

class App extends Component {

  state = {
    persons: [
      { id: "1", name: "Jenny", age: "29" },
      { id: "2",name: "Barbara", age: "59" },
      { id: "3",name: "Alberto", age: "66" }
    ],
    username: 'jghvz8',
    showPersons: false
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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key = {person.id}>
                        <Person 
                        click = {this.deletePersonHandler.bind(this, index)}
                        changed = {(event) => this.nameChangedHandler(event, person.id)}
                        name = {person.name} 
                        age = {person.age}/>
                      </ErrorBoundary>
          })}
        </div>
      );

      style.backgroundColor = 'red';
    }

    let classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }


    return (
        <div className="App">
          <h1>Hi, I am a react App</h1>
          <p className = {classes.join(' ')}>This is really working</p>
          <button
            /*onClick = {it might cause performance issues() => this.switchNameHandler("Max")}*/
            onClick={this.togglePersonHandler}
            style={style}>
            Switch name
          </button>
          {persons}
        </div>      
    );
  }
}

export default App;
