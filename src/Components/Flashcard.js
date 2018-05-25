import React from "react"
import ScrollArea from "react-scrollbar"

const Flashcard = props => (
  <div className="card">
    <div className="back side">{props.content.front}</div>
    <div className="front side">
      {!!props.content.image && <img src={props.content.image} />}
      {!!props.content.header && <h4>props.content.header</h4>}
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
    </div>
  </div>
)

export default Flashcard
