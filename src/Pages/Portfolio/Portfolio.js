import React, { Component, PureComponent } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from "./styles.css";
import { Menu, MenuOptions } from "../Components/Menu";

export class Portfolio extends PureComponent {
  render() {
    return (
      <div className="wrapper">
        <Menu currentTab={MenuOptions.PORTFOLIO} />
        <div className="about-wrapper">
          <div className="about">
            <p className="intro">Hello,</p>{" "}
            <p>
              My name is <span className="bold">Jonathan Bursztyn</span>. I’m a
              Software Engineer from Buenos Aires, Argentina - currently working
              at{" "}
              <a
                href="https://www.salesforce.com/"
                target="_blank"
                className="link"
              >
                Salesforce
              </a>.
            </p>
            <p>
              I enjoy programming and designing{" "}
              <Link to={`/${MenuOptions.PORTFOLIO}`} className="link">
                awesome web and mobile applications
              </Link>, and during my spare time I indulge in photography.
            </p>
            <p>
              If you’d like to reach me, please{" "}
              <a
                href="mailto:jobur93@gmail.com"
                target="_blank"
                className="link"
              >
                shoot me an email
              </a>.
            </p>
            <p>
              ... or you can just check out{" "}
              <Link to="/" className="link">
                my photographs
              </Link>.
            </p>
          </div>
        </div>
      </div>
    );
  }
}