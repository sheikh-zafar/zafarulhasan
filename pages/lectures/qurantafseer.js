import React, { Component } from "react";
import Navbar from "../nav";
import { tafseerdata } from "../api/tafseerdata";
import Tafseer from "../Tafseer";
import Footer from "../footer";

export default class tadweensunnah extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tafseerdata: tafseerdata,
    };
  }
  render() {
    return (
      <div>
        <Navbar />
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12">
                <h5 className="audio-display-head">تفسير القرآن</h5>
                <p
                  className="lead"
                  style={{ fontFamily: "Fredoka One", fontSize: "20px" }}
                >
                  Tafseerul Qur&apos;an
                </p>
                <hr />
              </div>
            </div>
          </div>
        </section>
        <Tafseer tafseer={this.state.tafseerdata} />
        {/*Footer section */}
        <section className="embed-section">
          <div className="col-md-12 text-center">
            <Footer />
          </div>
        </section>
      </div>
    );
  }
}
