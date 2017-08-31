import React, { Component } from 'react';

const Dropdown = ({utc, updateFunc, name}) => (
    <div className="form-group">
        <select name={name} className="form-control" value={utc} onChange={updateFunc}>
            <option value={"America/New_York"}> New York </option>
            <option value={"Asia/Tokyo"}> Tokyo </option>
            <option value={"America/Los_Angeles"}>  Los Angeles </option>
        </select>
    </div>
)

export default Dropdown