import React, { Component } from "react";
import Navbar from "../nav";
import Footer from "../footer";
import Link from "next/link";

export default class taweel extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12">
                <h5 className="audio-display-head">طويل دورة</h5>
                <p
                  className="lead"
                  style={{ fontFamily: "Fredoka One", fontSize: "20px" }}
                >
                  Dawrah ilmiyyah (Taweel)
                </p>
                <hr />
              </div>
            </div>
          </div>
        </section>
        {/*Al Arbaoona Nawawi */}
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12 d-flex justify-content-center">
                <div className="card text-center">
                  <div className="card-header pb-0">
                    <div className="pt-2">الأربعون النَوايَة</div>
                    <p className="lead pt-3">Al Arba&apos;oona Nawawiyyah</p>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <Link href="/comingsoon">
                          <a
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
                          Listen
                        </a>
                        </Link>

                      </div>
                      <div className="col">
                        <a
                          href="https://drive.google.com/drive/u/1/folders/1azueqYmaJAcOntjy9hxks029gnVIGyky"
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
                          href="https://www.youtube.com/c/ZafarulHasan/featured"
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
        {/*Sharh as-Sunnah */}
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12 d-flex justify-content-center">
                <div className="card text-center">
                  <div className="card-header pb-0">
                    <div className="pt-2">شرح السنة</div>
                    <p className="lead pt-3">Sharh As-Sunnah</p>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <a
                          href="https://archive.org/embed/sharh-as-sunnah-barbaharee-zafarulhasan-madani&playlist=1&list_height=550"
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
                          Listen
                        </a>
                      </div>
                      <div className="col">
                        <a
                          href="https://drive.google.com/drive/u/0/folders/1FHmnB17RfmCYfZdjSpuyQ6XCt1zELR-o"
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
                          href="https://www.youtube.com/playlist?list=PLmZP1KIsC-hnmXQn8oulAyQDd3l8xjyDo"
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
        {/*Bulugh al-Maram */}
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12 d-flex justify-content-center">
                <div className="card text-center">
                  <div className="card-header pb-0">
                    <div className="pt-2">بلوغ المرام</div>
                    <p className="lead pt-3">Bulugh al-Maram</p>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <a
                          href="https://archive.org/embed/sharh-bulugh-al-maram-zafarulhasan-madani&playlist=1&list_height=550"
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
                      </div>
                      <div className="col">
                        <a
                          href="https://drive.google.com/drive/u/0/folders/1dt9ClL2vhPPiz9UtfzwRyWNvFpHOj1dw"
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
                          href="https://www.youtube.com/playlist?list=PLmZP1KIsC-hltNDJamXol6XA04VzJKIng"
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
        {/*Kitab at-Tawheed */}
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12 d-flex justify-content-center">
                <div className="card text-center">
                  <div className="card-header pb-0">
                    <div className="pt-2">كتاب التوحيد</div>
                    <p className="lead pt-3">Kitab at-Tawheed</p>
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
                          href="https://drive.google.com/drive/u/0/folders/1msQrFTXsWmG2M76nb373wHtJFeFgl85Y"
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
                          href="https://www.youtube.com/c/ZafarulHasan/featured"
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
        {/*Usool al-Thalatha */}
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12 d-flex justify-content-center">
                <div className="card text-center">
                  <div className="card-header pb-0">
                    <div className="pt-2">الأصول الثلاثة</div>
                    <p className="lead pt-3">Usool al-Thalatha</p>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <a
                          href="https://archive.org/embed/3-fundamental-principles-zafarulhasan-madani&playlist=1&list_height=550"
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
                      </div>
                      <div className="col">
                        <a
                          href="https://drive.google.com/drive/u/0/folders/1b_iM6DBbrbbMP7p7-KzuRVeH-wZDPwts"
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
                          href="https://www.youtube.com/playlist?list=PLmZP1KIsC-hlVgAZOuDvaowaj9uPKoYWL"
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

        {/*Shamail al-Muhammadiyah */}
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12 d-flex justify-content-center">
                <div className="card text-center">
                  <div className="card-header pb-0">
                    <div className="pt-2">الشمائل المحمدية</div>
                    <p className="lead pt-3">Shamail al-Muhammadiyah</p>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <a
                          href="https://archive.org/embed/sharh-shamail-muhammadiyah-zafarulhasan-madani&playlist=1&list_height=550"
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
                      </div>
                      <div className="col">
                        <a
                          href="https://drive.google.com/drive/u/0/folders/1SNvR6J81FrBQjwmWofW5U3PLeCQKEIvN"
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
                          href="https://www.youtube.com/playlist?list=PLmZP1KIsC-hk_6GGFntSM-IwahZs_cJb6"
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
        {/*Riyad us-saliheen */}
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12 d-flex justify-content-center">
                <div className="card text-center">
                  <div className="card-header pb-0">
                    <div className="pt-2">رياض الصالحين</div>
                    <p className="lead pt-3">Riyad us-saliheen</p>
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
                          href="https://drive.google.com/drive/u/0/folders/1MxPz38wGwGKZHumOMAU6ZaJemvDG9PTn"
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
                          href="https://www.youtube.com/playlist?list=PLmZP1KIsC-hm8ojp4-oHK9GMrHKjcIDyB"
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
