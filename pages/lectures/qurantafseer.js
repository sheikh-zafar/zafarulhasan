import React, { Component } from "react";
import Navbar from "../nav";
import Footer from "../footer";

export default function tadweensunnah({ tafseers }) {
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
      {tafseers.map((tafseer) => (
        <section className="embed-section" key={tafseer.arabictitle}>
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12 d-flex justify-content-center">
                <div className="card text-center">
                  <div className="card-header pb-0">
                    <div className="pt-2">{tafseer.arabictitle}</div>
                    <p className="lead pt-3">{tafseer.englishtitle}</p>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <a
                          href={tafseer.archive}
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
                          <i
                            className="fa fa-headphones"
                            aria-hidden="true"
                          ></i>{" "}
                          Listen
                        </a>
                      </div>
                      <div className="col">
                        <a
                          href={tafseer.drive}
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
                          href={tafseer.youtube}
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
      ))}
      {/*Footer section */}
      <section className="embed-section">
        <div className="col-md-12 text-center">
          <Footer />
        </div>
      </section>
    </div>
  );
}
export async function getStaticProps() {
  const res27 = await fetch(`https://zafar-madani.vercel.app/api/Tafseer`);
  const tafseers = await res27.json();

  return {
    props: {
      tafseers,
    },
  };
}
