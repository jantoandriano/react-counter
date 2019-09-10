import React from 'react'
import "../style.scss"
import swal from "sweetalert"
import Amount from "./Amount"


export default class Counter extends React.Component {
  constructor (){
    super();
    this.state = {
      counter : 0,
    }
  }

  incrementCount= () => {
    const {counter} = this.state
    this.setState({
      counter:counter+1
    })
  }

  decrementCount= () => {
    const {counter} = this.state
    if (counter == 0) {
      swal("BRO", "ngak boleh minus", "error");
    } else{
      this.setState({
        counter : counter-1
      })
    }
  }

  render() {
    const {counter} = this.state
    return (
      <div className="center">
        <h1 className="header">Counter</h1>
        <Amount count = {counter} title="Amount"/>
        <button className="btn btn-inc" onClick={this.incrementCount}>+</button>
        <button className="btn btn-dec" onClick={this.decrementCount}>-</button>
      </div>
    )
  }
}
