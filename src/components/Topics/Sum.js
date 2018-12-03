import React, { Component } from 'react'

class Sum extends Component {

  constructor(){
    super();

    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
  }

  updateNumber1(value){
    this.setState({number1: parseInt(value, 10)});
  }

  updateNumber2(value){
    this.setState({number2: parseInt(value, 10)});
  }

  sum(num1, num2){
    this.setState({
      sum: num1 + num2
    })
  }

  render(){
    return (
      <div className="puzzleBox SumPB">
        <h4>Sum</h4>
        <input className="inputLine" onChange={(e) => this.updateNumber1(e.target.value)}></input>
        <input className="inputLine" onChange={(e) => this.updateNumber2(e.target.value)}></input>
        <button className="confirmationButton" onClick={() => this.sum(this.state.number1, this.state.number2)}>Get sum</button>
        <span className="resultsBox SumRB">Sum: {this.state.sum}</span>
      </div>
    )
  }
}

export default Sum
