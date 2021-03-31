import React, { Component, PureComponent } from "react";
import "./Head.css";
import logo from "./images/phlask-logo/phlask-logo.png";
import logo2x from "./images/phlask-logo/phlask-logo@2x.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import LoginButton from "./LoginButton/LoginButton";
import LogoutButton from "./LogoutButton/LogoutButton";
import Profile from "./Profile";

export class Head extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      displayFilter: false
    };
  }

  render() {
    return (
      <div className="menu">
        <header>
          <Navbar bg="light" expand="lg" className="headColumns">
            <Navbar.Brand href="https://phlask.me/">
              <img
                src={logo}
                alt="PHLASK"
                className="logoImage"
                srcSet={logo + ", " + logo2x + " 2x"}
              />
            </Navbar.Brand>
            {/* <img src={icon} alt="filterImg" onClick={this.display} /> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="menu">
              <Nav className="d-flex">
                <Nav.Link href="mission">Mission</Nav.Link>
                <Nav.Link href="project">Project</Nav.Link>
                <Nav.Link href="share">Share Water & Food</Nav.Link>
                <Nav.Link href="contribute">Contribute</Nav.Link>
                <div className="ml-auto auth">
                  <Nav.Link >
                    <LoginButton />
                    <LogoutButton />
                  </Nav.Link>
                    <Profile />
                </div>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
      </div>
    );
  }
}

export default Head;
