import React, { Component } from "react";
import Navbar from "../nav";
import Footer from "../footer";
import Link from "next/link";

export default class sistersection extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/*Title */}
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12">
                <h5 className="audio-display-head"> النّساء</h5>
                <p
                  className="lead"
                  style={{ fontFamily: "Fredoka One", fontSize: "20px" }}
                >
                  Sisters Section
                </p>
                <hr />
              </div>
            </div>
          </div>
        </section>
        {/*Sister section card */}
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12 d-flex justify-content-center">
                <div className="card text-center pt-2">
                  <div className="card-header pb-0">
                    <div className="pt-2">النّساء</div>
                    <p className="lead pt-3">Sister&apos;s section</p>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <Link href="/comingsoon">
                          <a
                            className="btn btn btn-lg btn-outline-dark"
                            target="_blank"
                            rel="noreferrer"
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
                        </Link>
                      </div>
                      <div className="col">
                        <a
                          href="https://drive.google.com/drive/folders/15fDSK6rNln1xfP5hPi13jsP4vFsc1LwU"
                          target="_blank"
                          rel="noreferrer"
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
                          href="https://www.youtube.com/watch?v=VVTVdB6Rp7Q&list=PLmZP1KIsC-hnxbVOity71qHq_YqO6Ui5G"
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            backgroundColor: "#2e856e",
                            color: "beige",
                            fontFamily: "Righteous",
                          }}
                        >
                          <i
                            className="fa fa-video-camera"
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
          <div className="col-md-12 text-center">
            <Footer />
          </div>
        </section>
      </div>
    );
  }
}
