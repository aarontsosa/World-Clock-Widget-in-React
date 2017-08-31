import React, { Component } from 'react';
import _Update from './App.js'
import City from './City.js'
import Time from './Time.js'
import Dropdown from './Dropdown.js'

class WorldClock extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
}

const Buildclock = ({array, updateFunc}) => {
    let clockset = []
    for(let x=0; x < array.length; x++){
        clockset.push( <Clock 
            time={array[x].time} 
            cityName={array[x].cityName} 
            utc={array[x].utc}
            updateFunc = {updateFunc} 
            name = {x}
            array = {array}
            />) 
    }
    return <div> {clockset} </div>
}


const Clock = (props) => (
    <div className="col-lg-3">
      <div className="card">
        <div className="card-block">
            <City {...props} />
            <Dropdown {...props}/>
          <Time {...props} />
        </div>
      </div>
    </div>
)

export default Buildclock