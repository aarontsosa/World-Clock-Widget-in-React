import React, { Component } from 'react';
import _Update from './App.js'

class WorldClock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: (new Date().toLocaleTimeString()),
            currentTimeZone: "America/New_York"
        }
    }
}
const Clock = ({timezone, time, updateHandler}) => (
    <div className="col-lg-3">
      <div className="card">
        <div className="card-block">
            <h2 className="card-title"> World Clock </h2>
            <h6 className="card-subtitle"> Time Zone </h6>
            <div className="form-group">
            <select className="form-control" value = {timezone} onChange={updateHandler}>
                <option value={"Europe/London"}> London </option>
                <option value={"America/New_York"}> New York </option>
                <option value={"America/Chicago"}> Chicago </option>
                <option value={"America/Denver"}> Denver </option>
                <option value={"America/Los_Angeles"}>  Los Angeles </option>
                <option value={"Pacific/Honolulu"}>  Honolulu </option>
            </select>
            </div>
          <h1 className="card-subtitle"> {time} </h1>
          <button type="button" className="btn btn-info btn-sm">add</button>
        </div>
      </div>
    </div>
)

export default Clock;