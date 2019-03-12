import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput'

class App extends Component {

  state = {
    persons : [
      {name: "Jenny", age: "29"},
      {name: "Barbara", age: "59"},
      {name: "Alberto", age: "66"}
    ],
    username: 'jghvz8'
  }

  switchNameHandler = (newName) => {
    //DON'T DO THIS this.state.persons[0].name = "Max";
    this.setState({
      persons : [
        {name: newName, age: "29"},
        {name: "Barbara", age: "59"},
        {name: "Alberto", age: "60"}
      ]
    })
  }

  usernameChangedHandler = (event) => {
    this.setState({
      username : event.target.value
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons : [
        {name: event.target.value, age: "29"},
        {name: "Barbara", age: "59"},
        {name: "Alberto", age: "60"}
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I am a react App</h1>
        
        <UserInput username = {this.state.username} changed = {this.usernameChangedHandler}/>
        <UserOutput username = {this.state.username}/>
        <UserOutput username = {this.state.username}/>

        <hr/>

        <button 
          onClick = {/*it might cause performance issues*/() => this.switchNameHandler("Max")}
          style = {style}>
          Switch name
        </button>
        <Person 
          name = {this.state.persons[0].name} 
          age = {this.state.persons[0].age}
          click = {this.switchNameHandler.bind(this, "Jenny!")}
          changed = {this.nameChangedHandler}/>
        <Person 
          name = {this.state.persons[1].name} 
          age = {this.state.persons[1].age}>My hobbies: Racing</Person>
        <Person 
          name = {this.state.persons[2].name} 
          age = {this.state.persons[2].age}/>

         

      </div>
    );
  }
}

export default App;
