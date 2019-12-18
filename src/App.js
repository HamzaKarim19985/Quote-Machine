import React from "react";
import Quote from "./Quote.js";
import Buttons from "./Buttons.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quote: {} };
    this.getQuote = this.getQuote.bind(this);
  }

  componentDidMount() {
    this.getQuote();
  }
  // Fetch quote
  getQuote() {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then(res => res.json())
      .then(
        data => {
          let randNum = Math.floor(Math.random() * data["quotes"].length);
          this.setState({
            quote: data.quotes[randNum]
          });
        },
        error => {
          console.error(error.message);
        }
      );
  }

  render() {
    return (
      <div id="quote-box">
        <Quote
          quote={this.state.quote.quote}
          author={this.state.quote.author}
        />
        <Buttons
          handleClick={this.getQuote}
          quote={this.state.quote.quote}
          author={this.state.quote.author}
        />
      </div>
    );
  }
}
