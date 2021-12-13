import React, { Component } from "react";
import Navbar from "../nav";
import Footer from "../footer";
import Link from "next/link";

export default class aam extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12">
                <h5 className="audio-display-head">عام دروس</h5>
                <p
                  className="lead"
                  style={{ fontFamily: "Fredoka One", fontSize: "20px" }}
                >
                  Aam Duroos
                </p>
                <hr />
              </div>
            </div>
          </div>
        </section>
        {/*Isteqamat */}
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12 d-flex justify-content-center">
                <div className="card text-center">
                  <div className="card-header pb-0">
                    إستقامت
                    <br />
                    <p className="lead pt-3">Isteqamat</p>
                  </div>
                  <div className="card-body pt-0">
                    <div className="row">
                      <div className="col">
                        <a
                          href="https://archive.org/embed/istiqamah-zafarulhasan-madani&playlist=1&list_height=550"
                          title="salaf"
                          className="btn btn btn-lg btn-outline-dark"
                          target="_newtab"
                          style={{
                            backgroundColor: "#2e856e",
                            color: "beige",
                            fontFamily: "Righteous",
                          }}
                        >
                          <i
                            className="fa fa-headphones"
                            aria-hidden="true"
                          ></i>{" "}
                          Listen
                        </a>
                      </div>
                      <div className="col">
                        <a
                          href="https://drive.google.com/drive/folders/1LVbol0FZAEe8Y2efbnV9jNJLbQN95fkT"
                          title="ahle hadith"
                          target="_newtab"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            backgroundColor: "#2e856e",
                            color: "beige",
                            fontFamily: "Righteous",
                          }}
                        >
                          <i className="fa fa-download" aria-hidden="true"></i>{" "}
                          Download
                        </a>
                      </div>
                      <div className="col">
                        <a
                          href="https://www.youtube.com/playlist?list=PLmZP1KIsC-hmd_vS2BTCk6n43tGG5IaIr"
                          title="zafar ul hasan madani"
                          target="_newtab"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            backgroundColor: "#2e856e",
                            color: "beige",
                            fontFamily: "Righteous",
                          }}
                        >
                          <i
                            className="fa fa-youtube-play"
                            aria-hidden="true"
                          ></i>{" "}
                          Watch
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12 d-flex justify-content-center">
                <div className="card text-center">
                  <div className="card-header pb-0">
                    أعمال القلوب
                    <br />
                    <p className="lead pt-3">Dil-ke-Aamaal</p>
                  </div>
                  <div className="card-body pt-0">
                    <div className="row">
                      <div className="col">
                        <Link href="/comingsoon">
                          <a
                            title="zafar ul hasan madani"
                            className="btn btn btn-lg btn-outline-dark"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              backgroundColor: "#2e856e",
                              color: "beige",
                              fontFamily: "Righteous",
                            }}
                          >
                            <i
                              className="fa fa-headphones"
                              aria-hidden="true"
                            ></i>{" "}
                            <a>Listen</a>
                          </a>
                        </Link>
                      </div>
                      <div className="col">
                        <a
                          href="https://drive.google.com/drive/u/1/folders/1rgVlY1adu7MNnOIdl2B4fk7wCiOup-qC"
                          title="manhaj"
                          target="_newtab"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            backgroundColor: "#2e856e",
                            color: "beige",
                            fontFamily: "Righteous",
                          }}
                        >
                          <i className="fa fa-download" aria-hidden="true"></i>{" "}
                          Download
                        </a>
                      </div>
                      <div className="col">
                        <a
                          href="https://www.youtube.com/playlist?list=PLmZP1KIsC-hk9I9izzkKXm2DO05-5-YsY"
                          title="manhaj"
                          target="_newtab"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            backgroundColor: "#2e856e",
                            color: "beige",
                            fontFamily: "Righteous",
                          }}
                        >
                          <i
                            className="fa fa-youtube-play"
                            aria-hidden="true"
                          ></i>{" "}
                          Watch
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
