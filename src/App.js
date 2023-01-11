import React, { Component } from "react";
import "./App.scss";
// import ColorPicker from "./components/ColorPicker";
// import Tabs from "./components/Tabs";
import UserCard from "./components/UserCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Tabs />
        <ColorPicker /> */}
        <UserCard />
      </div>
    );
  }
}

export default App;
