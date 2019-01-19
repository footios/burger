import React from "react";
import Eject from "../../hoc/Eject";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

// Child of App
class Layout extends React.Component {
  state = { backDrop: true, showSidedrawer: false };

  sideDrawerClosed = () => {
    this.setState({ backDrop: false, showSidedrawer: true });
  };

  render() {
    return (
      <Eject>
        <Toolbar />
        <SideDrawer
          show={this.state.backDrop}
          //showSidedrawer={this.state.showSidedrwer}
          sideDrawerClosed={this.sideDrawerClosed}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Eject>
    );
  }
}

export default Layout;
