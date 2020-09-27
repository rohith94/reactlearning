// import
import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

//react component
const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {faker.name.firstName()}
          </a>
          <div className="metadata">
            <span className="date"> Today 6:00 pm</span>
          </div>
          <div className="text">Nice blog Post.!</div>
        </div>
      </div>

      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {faker.name.firstName()}
          </a>
          <div className="metadata">
            <span className="date"> Today 6:00 pm</span>
          </div>
          <div className="text">Nice blog Post.!</div>
        </div>
      </div>

      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {faker.name.firstName()}
          </a>
          <div className="metadata">
            <span className="date"> Today 6:00 pm</span>
          </div>
          <div className="text">Nice blog Post.!</div>
        </div>
      </div>
    </div>
  );
};

//render react component
ReactDOM.render(<App />, document.querySelector("#root"));
