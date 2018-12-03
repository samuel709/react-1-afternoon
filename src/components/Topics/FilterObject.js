import React, { Component } from 'react'

class FilterObject extends Component {

  constructor(){
    super();
    this.state = {
      unfilteredArray: [
        {
          name: "Sam",
          age: 22,
          hairColor: "Blonde"
        },
        {
          name: "Kevin",
          hairColor: "Brown",
          hobby: "Play basketball"
        },
        {
          name: "Jack",
          hobby: "Play with Dallas",
          married: true
        },
        {
          name: "Dan",
          age: 29,
          hairColor: "Brown"
        }
      ],
      userInput: "",
      filteredArray: []
    }
  }

  updateUserInput(value){
    this.setState({
      userInput: value
    })
  }

  filterObject(prop){
    let array = this.state.unfilteredArray
    let filtered = []

    for (let i = 0; i < array.length; i++){
      if (array[i].hasOwnProperty(prop)){
        filtered.push(array[i])
      }
    }
    this.setState({
      filteredArray: filtered
    })
  }

  render(){
    return(
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText"></span>
        <input className="inputLine" onChange={(e) => this.updateUserInput(e.target.value)}></input>
        <button className="confirmationButton" onClick={() => this.filterObject(this.state.userInput)}>Filter</button>
        <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
      </div>
    )
  }
}

export default FilterObject;
