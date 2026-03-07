import React, { Component } from 'react'

export default class LifeClass extends Component {

    constructor(){
        super();

        this.state={
            count:0
        }
    }
    componentDidMount(){
        console.log("Component did mount it render 1st time after component gets rendered")
    }
    componentDidUpdate(){
        console.log("State is updated")
    }
    componentWillUnmount(){
        console.log("Component Did Unmount")
    }

    increment(){
        this.setState({count: this.state.count+1})
    }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={()=>this.increment()}>Increment</button>
      </div>
    )
  }
}
