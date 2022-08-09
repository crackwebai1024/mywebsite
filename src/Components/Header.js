import React, { Component } from "react";
import ModalImage from "react-modal-image";

class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var profilepic = "images/" + this.props.data.image;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url} target="_blank">
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <div className="header-wrapper">
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#home" title="Hide navigation">
              Hide navigation
            </a>

            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              {/* <li>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li> */}
              <li>
                <a className="smoothscroll" href="#resume">
                  Resume
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio">
                  Works
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#testimonials">
                  Testimonials
                </a>
              </li>
              {/* <li>
                <a className="smoothscroll" href="#contact">
                  Contact
                </a>
              </li> */}
            </ul>
            <div className="user-info">
              <div className="info-avatar">
                <img src="/images/logo.png" alt="mingxing" />
              </div>
              <div className="name">
                <img src="/images/name.png" alt="mingxing" />
              </div>
            </div>
          </nav>
          <div className="spacer"></div>
          <a href={resumeDownload} className="download-resume">
            <img src="/images/download.png" />
          </a>
          <div className="row">
            <div className="col-md-3 col-sm-4 col-xs-12">
              <div className="user-image">
                <ModalImage
                  className="profile-pic"
                  small={profilepic}
                  large={profilepic}
                  alt="Mingxing"
                />
              </div>
            </div>
            <div className="col-md-5 col-sm-8 col-xs-12">
              <div className="banner-text">
                <h1 className="responsive-headline">I'm {name}.</h1>
                <h3 className="banner-info">
                  {city} based <span>{occupation}</span>. {description}.
                </h3>
                <h3 className="banner-info">{bio}</h3>
                <hr />
                <ul className="social">{networks}</ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="contact-info">
                <h2>Contact Details</h2>
                <p className="address bio">
                  <span>{name}</span>
                  <br />
                  <span>
                    {street}
                    <br />
                    {city} {state}, {zip}
                  </span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle"></i>
            </a>
          </p>
        </header>
      </div>
    );
  }
}

export default Header;
