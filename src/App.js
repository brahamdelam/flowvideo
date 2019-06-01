import React, { Component } from "react";
import Navmenu from "./NavMenu";
import logo from "./logo.png";

class App extends Component {
  render() {
    let links = [
      { label: "Your Home", link: "#home", active: true },
      { label: "Stats", link: "#about" },
      { label: "Portfolio", link: "#portfolio" },
      { label: "Contact Us", link: "#contact-us" }
    ];

    return (
      <div>
        <Navmenu links={links} logo={logo} />
      </div>
    );
  }
}

export default App;
