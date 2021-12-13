import React, { Component } from "react";
import Navbar from "../nav";
import Footer from "../footer";
import Link from "next/link";

export default class muktasar extends Component {
  render() {
    return (
      <div>

        <Navbar />
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12">
                <h5 className="audio-display-head">مختصر دورة</h5>
                <p
                  className="lead pt-3"
                  style={{ fontFamily: "Fredoka One", fontSize: "20px" }}
                >
                  Dawrah ilmiyah (Mukhtasar)
                </p>
                <hr />
              </div>
            </div>
          </div>
        </section>
        {/*Raf'ul maram*/}
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12 d-flex justify-content-center">
                <div className="card text-center">
                  <div className="card-header pb-0 pt-2">
                    <div className="pt-2">رفع الملام</div>
                    <p className="lead pt-3">Raf&apos;ul Malam</p>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <a
                          href="https://archive.org/embed/raf-al-malam-an-al-aimmat-al-alam-zafarulhasan-madani&playlist=1&list_height=550"
                          className="btn btn btn-lg btn-outline-dark"
                          target="_blank"
                          rel="noreferrer"
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
                          href="https://drive.google.com/drive/folders/1-lsbdF9fKIoVkT5l2HMBv_0jsD8VoapL"
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
                          href="https://www.youtube.com/playlist?list=PLmZP1KIsC-hn__yls0YW0POpbt-Hp4APZ"
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            backgroundColor: "#2e856e",
                            color: "beige",
                            fontFamily: "Righteous",
                          }}
                        >
                          <i className="fa fa-video-camera" aria-hidden="true"></i>{" "}
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
        {/*Tadween card */}
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12 d-flex justify-content-center">
                <div className="card text-center">
                  <div className="card-header pb-0 pt-2">
                    <div className="pt-2">تدوين السنة</div>
                    <p className="lead pt-3">Tadween As Sunnah</p>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col col-xs-12">
                        <a
                          href="https://archive.org/embed/tadween-as-sunnah-zafarulhasan-madani&playlist=1&list_height=550"
                          title="tadween as sunnah"
                          className="btn btn btn-lg btn-outline-dark"
                          target="_blank"
                          rel="noreferrer"
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
                      <div className="col col-xs-12">
                        <a
                          href="https://drive.google.com/drive/folders/1Fx6WbJG3y2mmkrSuKSWXJZz3FBwd80mf"
                          title="tadween as sunnah"
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
                          href="https://www.youtube.com/playlist?list=PLmZP1KIsC-hn_EzJv5bmRNWRmC2eJSTvO"
                          title="tadween as sunnah"
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            backgroundColor: "#2e856e",
                            color: "beige",
                            fontFamily: "Righteous",
                          }}
                        >
                          <i className="fa fa-video-camera" aria-hidden="true"></i>{" "}
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
        {/*Arbaen Nabawi card */}
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12 d-flex justify-content-center">
                <div className="card text-center">
                  <div className="card-header pb-0 pt-2">
                    <div className="pt-2">الربعين النووى</div>
                    <p className="lead pt-3">Al-Arba&apos;oona An-Nawawi</p>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <a
                          href="https://archive.org/embed/40-ahaadeth-imaam-an-nawawi--zafarulhasan-madani&playlist=1&list_height=550"
                          className="btn btn btn-lg btn-outline-dark"
                          target="_blank"
                          rel="noreferrer"
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
                          href="https://drive.google.com/drive/folders/1-lsbdF9fKIoVkT5l2HMBv_0jsD8VoapL"
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
                        <Link
                          href="/comingsoon"
                        >
                          <a
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            backgroundColor: "#2e856e",
                            color: "beige",
                            fontFamily: "Righteous",
                          }}><i className="fa fa-video-camera" aria-hidden="true"></i>{" "}Watch</a>
                        </Link>
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
