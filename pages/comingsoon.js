import React, { Component } from "react";
import Navbar from "./nav";
import Link from "next/link";

export default class comingsoon extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container d-flex justify-content-center">
          <div className="jumbotron">
            <i className="fa fa-5x fa-commenting" aria-hidden="true"></i>
            <h3 className="display-4">Coming soon!</h3>

            <p className="lead">
              <Link
                href="/lectures"
              >
                <a className="btn btn btn-lg btn-outline-dark"
                target="_newtab"
                style={{
                  backgroundColor: "#2e856e",
                  color: "beige",
                  fontFamily: "Righteous",
                }}>Go To Lectures Page</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
