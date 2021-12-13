import React, { Component } from "react";
import Navbar from "./nav";
import Footer from "./footer";

export default class YouTubeChannel extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section className="embed-section">
          <div className="col-md-12 text-center">
            <Footer />
          </div>
        </section>
      </div>
    );
  }
}
