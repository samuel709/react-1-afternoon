import React, { Component } from 'react'

class EvenAndOdd extends Component {

  constructor(){
    super();

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ""
    }
  }

  updateUserInput(val){
    this.setState({
      userInput: val
    })
  }

  solveArray(arr){
    let wholeArray = arr.split(',')
    let even = []
    let odd = []

    for (let i = 0; i < wholeArray.length; i++){
      if (wholeArray[i] % 2 === 0){
        even.push(parseInt(wholeArray[i], 10));
      } else {
        odd.push(parseInt(wholeArray[i], 10));
      }
    }
    this.setState({
      evenArray: even,
      oddArray: odd
    })
  }

  render(){
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input className="inputLine" onChange={(e) => this.updateUserInput(e.target.value)}></input>
        <button className="confirmationButton" onClick={() => this.solveArray(this.state.userInput)}>Split</button>
        {console.log(this.state.evenArray, this.state.oddArray)}
        <span className="resultsBox">Evens: {this.state.evenArray.join(",")}</span>
        <span className="resultsBox">Odds: {this.state.oddArray.join(",")}</span>
      </div>
    )
  }
}

export default EvenAndOdd;
