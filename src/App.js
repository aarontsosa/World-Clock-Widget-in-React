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
          }
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
    return (
      <Buildclock array={this.state.cities} updateFunc={this._Update}/>
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
