import React from "react";

export default class Quote extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="text-box">
        <h1>{"Random Quote Machine"}</h1>
        <p id="text">{this.props.quote}</p>
        <p id="author">{this.props.author}</p>
      </div>
    );
  }
}
