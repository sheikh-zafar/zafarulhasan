import React, { Component } from "react";
import Navbar from "../nav";

export default class arkan extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12">
                <h5 className="audio-display-head">اركان الإسلام</h5>
                <p className="lead">Arkan al-Islam</p>
                <hr />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
