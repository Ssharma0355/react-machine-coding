import React, { Component } from 'react';
import CounterLife from './CounterLife';

export default class LifeClass extends Component {
 
    // constructor is also a lifecycle method to hold value before render
    constructor(){
        super();

        this.state={
            count:0
        }
    }
    componentDidMount(){
        console.log("Component did mount it render 1st time after component gets rendered")
    }
    // componentDidUpdate(){
    //     console.log("State is updated")
    // }
    componentWillUnmount(){
        console.log("Component Did Unmount")
    }

    increment(){
        this.setState({count: this.state.count+1})
    }
    // render is also an lifecycle method to interpret the JSX 
  render() {
    return (
      <div>
        <CounterLife number={this.state.count} />
        <button onClick={()=>this.increment()}>Increment</button>
      </div>
    )
  }
}
