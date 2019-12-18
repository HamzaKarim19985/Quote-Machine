import React from "react";

export default class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tweetContents = encodeURI(
      '"' + this.props.quote + '" - ' + this.props.author
    );
    return (
      <div>
        <hr />
        <div id="buttons">
          <a
            id="tweet-quote"
            href={
              "https://twitter.com/intent/tweet?&related=freecodecamp&text=" +
              tweetContents
            }
            target="_blank"
          >
            <img
              src="https://uploads.codesandbox.io/uploads/user/913fd57a-53c9-4258-bc19-cac08941a417/Q6eT-twitter_48.png"
              alt="Tweet this quote!"
            />
          </a>
          <button id="new-quote" onClick={this.props.handleClick}>
            {"new quote!"}
          </button>
        </div>
      </div>
    );
  }
}
