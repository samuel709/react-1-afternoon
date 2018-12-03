import React, { Component } from 'react'

class Palindrome extends Component {

  constructor(){
    super();

    this.state = {
      userInput: "",
      palindrome: ""
    }
  }

  updateUserInput(value){
    this.setState({
      userInput: value
    })
  }

  isAPalindrome(str) {
    var reverse = str.split("").reverse().join("")
    if (str === reverse){
      this.setState({
        palindrome: "true"
      })
    } else {
      this.setState({
        palindrome: "false"
      })
    }
  }

  render(){
    return(
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input className="inputLine" onChange={(e) => this.updateUserInput(e.target.value)}></input>
        <button className="confirmationButton" onClick={() => this.isAPalindrome(this.state.userInput)}>Check</button>
        <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
      </div>
    )
  }
}

export default Palindrome
