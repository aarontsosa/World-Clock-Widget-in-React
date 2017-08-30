import React, { Component } from 'react';

const MagicButton = ({title, handleClick}) => (
    <button onClick={handleClick}>{title}</button>
);

// const logIt = (e) => {
//     e.preventDefault();
//     console.log(`The Button said: Aloah`)
// }

export default MagicButton;