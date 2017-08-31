import React, { Component } from 'react';
import _Update from './App.js'
import City from './City.js'
import Time from './Time.js'
import Dropdown from './Dropdown.js'

class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cityName: this.props.cityName,
            utc: this.props.utc,
            time: new Date().toLocaleTimeString('en-US', {timeZone: this.props.utc})
        }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString('en-US',{timeZone: this.state.utc})
                })  
            }, 1000)
        }

    render() {
        let dropdownProps = Object.assign({}, this.props, {updateFunc: this._update}, {utc: this.state.utc})
        return (
        <div className="col-lg-3 col-md-3">
        <div className="card">
          <div className="card-block">
              <City {... this.state} />
              <Dropdown {... dropdownProps}/>
            <Time {... this.state} />
          </div>
        </div>
      </div>
    )
    }

    _update = (event) => {
        this.setState({
          utc: event.target.value,
          cityName: event.target.options[event.target.selectedIndex].textContent
        })
      }
    _
}

const Buildclock = ({array, updateFunc}) => {
    let clockset = []

    for(let x=0; x < array.length; x++){
        clockset.push( <Clock 
            time={array[x].time} 
            cityName={array[x].cityName} 
            utc={array[x].utc} 
            name = {x}
            updateFunc = {updateFunc}
            array = {array}
            />) 
    }
    return <div> {clockset} </div>
}


// const Clock = (props) => (
//     <div className="col-lg-3">
//       <div className="card">
//         <div className="card-block">
//             <City {...props} />
//             <Dropdown {...props}/>
//           <Time {...props} />
//         </div>
//       </div>
//     </div>
// )

export default Buildclock