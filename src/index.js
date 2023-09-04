import React, { Component } from "react";
var __html = require('./Home.js');
var template = { __html: __html };

class ScreenShare extends Component {
  render() {
    return (
      <div className="screen-share">
        <span dangerouslySetInnerHTML={template} />
      </div>
    );
  }
}
export default ScreenShare;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
