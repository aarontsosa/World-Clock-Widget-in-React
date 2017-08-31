import React, { Component } from 'react';
import _Update from './App.js'

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
const Clock = ({time, cityName}) => (
    <div className="col-lg-3">
      <div className="card">
        <div className="card-block">
            <h2 className="card-title"> {cityName} </h2>
            {/* <div className="form-group">
            <select className="form-control" value = {timezone} onChange={updateHandler}>
                <option value={"Europe/London"}> London </option>
                <option value={"America/New_York"}> New York </option>
                <option value={"America/Chicago"}> Chicago </option>
                <option value={"America/Denver"}> Denver </option>
                <option value={"America/Los_Angeles"}>  Los Angeles </option>
                <option value={"Pacific/Honolulu"}>  Honolulu </option>
            </select>
            </div> */}
          <h1 className="card-subtitle"> {time} </h1>
        </div>
      </div>
    </div>
)

export default Clock;