import React, { Component } from 'react'

export default class CounterLife extends Component {
    componentDidUpdate(prevprops, prevstate){

        console.log(prevprops.number);
        console.log(this.props.number);
        if(prevprops.number != this.props.number){
            console.log("Component get Updated!")
        }
    }
    componentWillUnmount(){
        console.log("Component Unmounted")
    }
  render() {
    return (
      <div>
        <h1>{this.props.number}</h1>
      </div>
    )
  }
}
