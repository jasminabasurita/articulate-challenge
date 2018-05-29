import React, { Component } from "react"
import ScrollArea from "react-scrollbar"
import "./Flashcard.css"

class Flashcard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flipped: ""
    }
  }
  handleClick = () => {
    const flipped = this.state.flipped ? "" : "flipped"
    this.setState({ flipped })
    // let flipped = "flipped"
    // if (this.state.flipped) {
    //   flipped = ""
    // }
  }
  render() {
    const { props } = this
    return (
      <div onClick={this.handleClick} className={`card ${this.state.flipped}`}>
        <div
          className="back side"
          style={{
            borderTop: `2px solid ${props.themeColor}`
          }}
        >
          <h2>{props.content.back}</h2>
          <i className="fas fa-sync fa-sm" />
        </div>
        <div className="front side">
          {!!props.content.image && (
            <div
              className="card-image"
              style={{
                background: `url(${props.content.image}) no-repeat`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            />
          )}
          {!!props.content.header && <h2>{props.content.header}</h2>}
          {!!props.content.text && (
            <ScrollArea
              speed={0.8}
              className="area"
              contentClassName="content"
              horizontal={false}
            >
              <div>{props.content.text}</div>
            </ScrollArea>
          )}
          <i className="fas fa-sync fa-sm" />
        </div>
      </div>
    )
  }
}

export default Flashcard
