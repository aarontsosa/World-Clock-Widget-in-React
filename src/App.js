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
      this.setState({
        cities:[0].time = new Date().toLocaleTimeString('en-US',{timeZone: "America/New_York"}),
        cities:[1].time = new Date().toLocaleTimeString('en-US', {timeZone: "America/Los_Angeles"}),
        cities:[2].time = new Date().toLocaleTimeString('en-US', {timeZone: "Asia/Tokyo"})
          })  
      }, 1000)
    }

  render() {
    return (
      <div>
        <div>
          <Clock 
          time={this.state.cities[0].time} 
          cityName={this.state.cities[0].cityName} 
          utc={this.state.cities[0].utc} 
          updateFunc={this._Update} 
          name='0'
          />
          <Clock 
          time={this.state.cities[1].time} 
          cityName={this.state.cities[1].cityName} 
          utc={this.state.cities[1].utc} 
          updateFunc={this._Update} 
          name='1'
          />
          <Clock 
          time={this.state.cities[2].time} 
          cityName={this.state.cities[2].cityName} 
          utc={this.state.cities[2].utc} 
          updateFunc={this._Update} 
          name='2'
          />
        </div>
      </div>
    )
  }

  _Update = (event) => {
    console.log(event.target)
    console.log(event.target.name)
    this.setState({
      cities:[event.target.name].utc = event.target.value
    })
  }

}

export default App;
