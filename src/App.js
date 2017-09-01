import React, { Component } from 'react';
import styles from './App.css';
import Buildclock from './WorldClock.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [
          {
              cityName: "New York",
              utc: "America/New_York",
              time: new Date().toLocaleTimeString('en-US',{timeZone: "America/New_York"})
          },
          {
              cityName: "Los Angeles",
              utc: "America/Los_Angeles",
              time: new Date().toLocaleTimeString('en-US', {timeZone: "America/Los_Angeles"})
          },
          {
              cityName: "Tokyo",
              utc: "Asia/Tokyo",
              time: new Date().toLocaleTimeString('en-US', {timeZone: "Asia/Tokyo"})
          },
          {
            cityName: "London",
            utc: "Europe/London",
            time: new Date().toLocaleTimeString('en-US', {timeZone: "Europe/London"})
        }
        ],
    cities2: [
      {
        cityName: "Chicago",
        utc: "America/Chicago",
        time: new Date().toLocaleTimeString('en-US',{timeZone: "America/Chicago"})
      },
      {
        cityName: "Denver",
        utc: "America/Denver",
        time: new Date().toLocaleTimeString('en-US',{timeZone: "America/Denver"})
      },
      {
        cityName: "Sydney",
        utc: "Australia/Sydney",
        time: new Date().toLocaleTimeString('en-US',{timeZone: "Australia/Sydney"})
      },
    ]
  }
  }

  componentDidMount(){
      setInterval(() => {
        let newCities = Object.assign([], this.state.cities);
        for(let i=0; i < Object.keys(newCities).length; i++){
          newCities[i].time = new Date().toLocaleTimeString('en-US',{timeZone: this.state.cities[i].utc})
          newCities[i].cityName = this.state.cities[i].cityName
        }
      this.setState({
        cities: newCities
          })  
      }, 1000)
    }

  render() {
    const { cities, cities2 } = this.state
    return (
      <div className="row">
        <div className="col-sm-6 col-md-12 col-lg-12 col-xs-6">
          <Buildclock array={cities} />
        </div>
        <div className="col-sm-6 col-md-12 col-lg-12 col-xs-6">
          <Buildclock array={cities2} />
        </div>
      </div>
    )
  }

  _Update = (event) => {
    let newCities = Object.assign([], this.state.cities);
    newCities[event.target.name].utc = event.target.value
    newCities[event.target.name].cityName = event.target.options[event.target.selectedIndex].textContent
    this.setState({
      cities: newCities
    })
  }

}

export default App;
