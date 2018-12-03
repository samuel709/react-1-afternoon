import React, { Component } from 'react'

class FilterString extends Component {

  constructor(){
    super();
    this.state = {
      unfilteredArray: ["Chuck Norris is cool","My name is Chuck Norris", "Batman saved Gotham", "How's it going, Chuck Norris?"],
      userInput: "",
      filteredArray: []
    }
  }

  updateUserInput(value){
    this.setState({
      userInput: value
    })
  }

  filterString(str){
    var unfiltered = this.state.unfilteredArray
    var filtered = []

    for (let i = 0; i < unfiltered.length; i++){
      if (unfiltered[i].includes(str)){
        filtered.push(unfiltered[i])
      }
    }

    this.setState({
      filteredArray: filtered
    })
  }

  render(){
    return(
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText"></span>
        <input className="inputLine" onChange={(e) => this.updateUserInput(e.target.value)}></input>
        <button className="confirmationButton" onClick={() => this.filterString(this.state.userInput)}>Filter String</button>
        <span className="resultsBox filterStringRB">Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
      </div>
    )
  }
}

export default FilterString
