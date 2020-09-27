// import
import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

//react component
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author={faker.name.firstName()}
        time="4:00 pm"
        detail="one"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author={faker.name.firstName()}
        time="6:00 pm"
        detail="two"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author={faker.name.firstName()}
        time="8:00 pm"
        detail="three"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

//render react component
ReactDOM.render(<App />, document.querySelector("#root"));
