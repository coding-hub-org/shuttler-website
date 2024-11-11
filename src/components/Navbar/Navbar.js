import React, { Component } from "react";

import SideDrawer from "./SideDrawer/SideDrawer";
import Toolbar from "./Toolbar/Toolbar";
import "./Navbar.css";
import Backdrop from "../Backdrop/Backdrop";

class Navbar extends Component {
  state = {
    SideDrawerOpen: false
  };

  navItems = [
    { id: "item1", value: "ABOUT", to: "#About" },
    { id: "item2", value: "TEAM", to: "#Team" },
    { id: "item3", value: "CONTACT US", to: "#Contact" },
    { id: "item4", value: "TERM AND CONDITION", href: "/TaC"}
  ];

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return {
        SideDrawerOpen: !prevState.SideDrawerOpen
      };
    });
  };

  backdropClickHandler = () => {
    this.setState({ SideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.SideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="navbar">
        <Toolbar
          drawerClickHandle={this.drawerToggleClickHandler}
          navItems={this.navItems}
          buttonText="CONTACT US"
        />

        <SideDrawer
          show={this.state.SideDrawerOpen}
          navItems={this.navItems}
          buttonText="CONTACT US"
        />
        {backdrop}
      </div>
    );
  }
}

export default Navbar;
