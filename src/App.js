import React, { Component } from "react"
import { FlashcardBlock } from "./Components"
import logo from "./logo.png"
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">¡Welcome to the Articulate Challenge!</h1>
        </header>
        <FlashcardBlock />
      </div>
    )
  }
}

export default App
