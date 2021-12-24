import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FaAlignRight } from "react-icons/fa";
import logo from "../assets/images/logo.png";


export default class Navbar extends Component {
  state = {
    isOpen: false,
    solid: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  handleScroll = () => {
    const show = window.pageYOffset > 1;
    console.log(window.pageYOffset);
    if (show) {
      this.setState({ solid: true });
    }
    else {
      this.setState({ solid: false });
    }

  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  render() {
    return (
      <nav className={this.state.solid ? "navbar-solid" : "navbar"}>
        <div className="nav-center">
          <div className="nav-header">
            <Link smooth to="#home">
              <img src={logo} width="255px" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
            <li>
              <Link smooth to="#home">Home</Link>
            </li>
            <li>
              <Link smooth to="#about">About</Link>
            </li>
            <li>
              <Link smooth to="#products">Products</Link>
            </li>
            <li>
              <Link smooth to="#careers">Careers</Link>
            </li>
            <li>
              <Link smooth to="#certifictes">Certifictes</Link>
            </li>
            <li>
              <Link smooth to="#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}