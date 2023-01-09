import React, { Component } from "react";
import "./App.scss";
import ColorPicker from "./components/ColorPicker";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Tabs /> */}
        <ColorPicker/>
      </div>
    );
  }
}

export default App;
