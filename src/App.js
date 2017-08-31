import React, { Component } from 'react';
import styles from './App.css';
import Clock from './WorldClock.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [
          {
              cityName: "New York",
              time: new Date().toLocaleTimeString('en-US',{timeZone: "America/New_York"})
          },
          {
            cityName: "Los Angeles",
            time: new Date().toLocaleTimeString('en-US', {timeZone: "America/Los_Angeles"})
          },
          {
            cityName: "Tokyo",
            time: new Date().toLocaleTimeString('en-US', {timeZone: "Asia/Tokyo"})
          }
        ]
  }
  }

  componentDidMount(){
      setInterval(() => {
      this.setState({
        cities: [
          {
            cityName: "New York",
            time: new Date().toLocaleTimeString('en-US',{timeZone: "America/New_York"})
          },
          {
            cityName: "Los Angeles",
            time: new Date().toLocaleTimeString('en-US', {timeZone: "America/Los_Angeles"})
          },
          {
            cityName: "Tokyo",
            time: new Date().toLocaleTimeString('en-US', {timeZone: "Asia/Tokyo"})
          }

          ]
          })  
      }, 1000)
    }

  render() {
    return (
      <div>
        <div>
          <Clock time={this.state.cities[0].time} cityName={this.state.cities[0].cityName} />
          <Clock time={this.state.cities[1].time} cityName={this.state.cities[1].cityName} />
          <Clock time={this.state.cities[2].time} cityName={this.state.cities[2].cityName} />
        </div>
      </div>
    )
  }

  // _Update = (event) => {
  //   console.log(event)
  //   let options = {timeZone: event.target.value}
  //   let newUTC = event.target.value
  //   this.setState({
  //     currentTimeZone: event.target.value,
  //     currentTime: newTime
  //   })
  // }

}

export default App;
