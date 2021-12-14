/* eslint-disable react/jsx-key */
import React, { Component } from "react";
import { tafseerdata } from "./api/tafseerdata";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tafseer: tafseerdata,
    };
  }
  render() {
    return this.state.tafseer.map((qurantafseer) => {
      return (
        <div>
          {/*Surah al-Fathiha */}
          <section className="embed-section">
            <div className="container">
              <div className="row text-center">
                <div className="col-md-12 d-flex justify-content-center">
                  <div className="card text-center">
                    <div className="card-header pb-0">
                      <div className="pt-2">{qurantafseer.arabictitle}</div>
                      <p className="lead pt-3">{qurantafseer.englishtitle}</p>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          <a
                            href={qurantafseer.archive}
                            className="btn btn btn-lg btn-outline-dark"
                            title="quran tafseer"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              backgroundColor: "#2e856e",
                              color: "beige",
                              fontFamily: "Righteous",
                            }}
                          >
                            <i className="fa fa-headphones" aria-hidden="true"></i>{" "}
                            Listen
                          </a>
                        </div>
                        <div className="col">
                          <a
                            href={qurantafseer.drive}
                            title="quran tafseer"
                            target="_blank"
                            rel="noopener noreferrer"
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
                            href={qurantafseer.youtube}
                            title="quran tafseer"
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
        </div>
      );
    });
  }
}
