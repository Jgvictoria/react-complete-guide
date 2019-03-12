import React from 'react';

import './UserOutput.css'

const userOutput = (props) => {
    const style = {
        fontSize: '20px'
    }
    return (
        <div className = "UserOutput">
            <p>Hello {props.username}!</p>
            <p style = {style}>Welcome to React</p>
        </div>
    );
}

export default userOutput;