import React from 'react'
import "../style.scss"
import swal from "sweetalert"


export default class Counter extends React.Component {
  constructor (){
    super();
    this.state = {
      counter : 0,
    }
  }

  incrementCount= () => {
    this.setState({
      counter:this.state.counter+1
    })
  }

  decrementCount= () => {
    if (this.state.counter == 0) {
      swal("BRO", "ngak boleh minus", "error");
    } else{
      this.setState({
        counter : this.state.counter-1
      })
    }
  }

  render() {
    return (
      <div className="center">
        <h1 className="header">Counter</h1>
        <h2>{this.state.counter}</h2>
        <button className="btn btn-inc" onClick={this.incrementCount}>+</button>
        <button className="btn btn-dec" onClick={this.decrementCount}>-</button>
      </div>
    )
  }
}
