import React, { Component } from "react"
import axios from "axios"
import { FlashcardBlock } from "./Components"
import logo from "./logo.png"
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flashcards: [],
      themeColor: "#000000"
    }
  }
  componentDidMount() {
    axios
      .get("/api/flashcards.json")
      .then(res => res.data)
      .then(({ flashcards, themeColor }) =>
        this.setState({ flashcards, themeColor }))
      .catch(err => console.error(err))
  }
  render() {
    return (
      <div className="App">
        <header
          className="App-header"
          style={{
            backgroundColor: this.state.themeColor
          }}
        >
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">¡Welcome to the Articulate Challenge!</h1>
        </header>
        <FlashcardBlock
          flashcards={this.state.flashcards}
          themeColor={this.state.themeColor}
        />
      </div>
    )
  }
}

export default App
