import React from 'react';

const cockpit = (props) => {
    const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };

    if (props.showPersons) {
        style.backgroundColor = 'red';
    }    

    let classes = [];
    if (props.persons.length <= 2) {
        classes.push('red');
    }
    if (props.persons.length <= 1) {
        classes.push('bold');
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really working</p>
            <button
                /*onClick = {it might cause performance issues() => this.switchNameHandler("Max")}*/
                onClick={props.clicked}
                style={style}>
                Switch name
            </button>
        </div>
    );
};

export default cockpit;