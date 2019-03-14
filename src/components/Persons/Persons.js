import React, { Component } from 'react';
import Person from './Person/Person'

class Persons extends Component {
    /* static getDerivedStateFromProps(props, state) {
        console.log('[Persons.js] getDerivedStateFromProps');
        return state;
    } */

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(previousProps, previousState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot!'};
    }
    componentDidUpdate(previousProps, previousState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    render() {
        console.log('[Persons.js] rendering...'); 
        return this.props.persons.map((person, index) => {
            console.log('[Person.js] render');
            return <Person
                key={person.id}
                click={() => this.props.clicked( index)}
                changed={(event) => this.props.changed(event, person.id)}
                name={person.name}
                age={person.age} />
        });
    }
} 

export default Persons;