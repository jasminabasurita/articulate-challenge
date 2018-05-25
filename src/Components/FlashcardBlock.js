import React, { Component } from "react"
import axios from "axios"
import Flashcard from "./Flashcard"

class FlashcardBlock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flashcards: []
    }
  }

  componentDidMount() {
    axios
      .get("/api/flashcards.json")
      .then(flashcards => this.setState({ flashcards }))
  }
  render() {
    return (
      <div className="flashcard-block">
        {!!this.state.flashcards.length &&
          this.state.flashcards.map(flashcard => (
            <Flashcard key={flashcard.id} content={flashcard} />
          ))}
      </div>
    )
  }
}

export default FlashcardBlock
