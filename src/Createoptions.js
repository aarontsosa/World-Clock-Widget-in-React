import React, { Component } from 'react';

const Options = ({utc, cityName}) => (
        <option value={utc}> {cityName} </option>
)

export default Options