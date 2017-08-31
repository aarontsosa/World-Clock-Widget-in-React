import React, { Component } from 'react';
import _Update from './App.js'
import City from './City.js'
import Time from './Time.js'
import Dropdown from './Dropdown.js'

class WorldClock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: {
                New_York: {
                    UTC: "America/New_York",
                    Time: (new Date().toLocaleTimeString('en-US',{timeZone: "America/New_York"}))
                }
            }
        }
    }

}
const Clock = ({time, cityName, utc, updateFunc, name}) => (
    <div className="col-lg-3">
      <div className="card">
        <div className="card-block">
            <City cityName={cityName} />
            <Dropdown utc={utc} updateFunc={updateFunc} name={name}/>
          <Time time={time} />
        </div>
      </div>
    </div>
)

export default Clock;