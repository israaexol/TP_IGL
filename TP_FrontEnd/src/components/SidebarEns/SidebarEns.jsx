
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './SidebarEns.css';
import logo from "assets/img/reactlogo.png";

class SidebarEns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  render() {
    const sidebarBackground = {
      backgroundImage: "url(" + this.props.image + ")"
    };
    return (
      <div
        id="sidebar"
        className="sidebar"
        data-color={this.props.color}
        data-image={this.props.image}
      >
          {this.props.hasImage ? (
            <div className="sidebar-background" style={sidebarBackground} />
          ) : (
            null
          )}
        <div className="logo">
          <a
            href="/mesgroupes"
            className="simple-text logo-mini"
          >
            <div className="logo-img">
              <img src={logo} alt="logo_image" />
            </div>
          </a>
          <a
            href="/mesgroupes"
            className="simple-text logo-normal"
          >
            MyScholarApp
          </a>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            
                  
                    <NavLink
                      to='/mesgroupes'
                      className="nav-link"
                      activeClassName="active"
                    >
                      <i className=  "pe-7s-browser"></i>
                      <p className= "abs">mes groupes</p>
                    </NavLink>

                    <NavLink
                      to='/mesgroupes'
                      className="nav-link"
                    >
                      <i className= "pe-7s-clock"></i>
                      <p>Emploi du temps</p>
                    </NavLink>

                    <NavLink
                      to='/mesgroupes'
                      className="nav-link"
                    >
                      <i className="pe-7s-user"></i>
                      <p>Mon profil</p>
                    </NavLink>
                    
          </ul>
        </div>
      </div>
    );
  }
}

export default SidebarEns;
