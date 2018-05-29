import React, { Component } from "react"
import axios from "axios"
import Flashcard from "./Flashcard"
import "./FlashcardBlock.css"

const FlashcardBlock = ({ themeColor, flashcards }) => (
  <div className="flashcard-block">
    {!!flashcards.length &&
      flashcards.map(flashcard => (
        <Flashcard
          key={flashcard.id}
          themeColor={themeColor}
          content={flashcard}
        />
      ))}
  </div>
)

export default FlashcardBlock
