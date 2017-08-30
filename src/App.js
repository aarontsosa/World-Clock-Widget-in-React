import React, { Component } from 'react';
import styles from './App.css';
import Clock from './WorldClock.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: (new Date().toLocaleTimeString()),
      currentTimeZone: "America/New_York"
    }
  }

  componentDidMount(){
      setInterval(() => {
      let options = {timeZone: this.state.currentTimeZone}
      let newTime = (new Date().toLocaleTimeString('en-US', options))
      this.setState({
        currentTime: newTime
        })  
    }, 1000)
  }

  render() {
    return (
      <div>
        <Clock timezone={this.state.currentTimeZone} time={this.state.currentTime} updateHandler={this._Update} />
      </div>
    )
  }

  _Update = (event) => {
    console.log(event)
    let options = {timeZone: event.target.value}
    let newTime = (new Date().toLocaleTimeString('en-US', options))
    this.setState({
      currentTimeZone: event.target.value,
      currentTime: newTime
    })
  }

}

export default App;
