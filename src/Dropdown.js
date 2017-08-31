import React, { Component } from 'react';
import Options from './Createoptions.js'

const Optionbuilder = ({array, name, utc, updateFunc}) => {
    let option = []
    for(let y=0; y < array.length; y++){
        option.push(<Options utc={array[y].utc} cityName={array[y].cityName} />)
    }
    return  <select name={name} className="form-control" value={utc} onChange={updateFunc}> {option} </select>
}

const Dropdown = (props) => (
    <div className="form-group">
        <Optionbuilder {...props} />
    </div>
)

export default Dropdown