import React, { Component } from "react";
import Navbar from "./nav";
import Footer from "./footer";
import Link from "next/link";
import RamadanSuccessfulFast from "./img/RamadanSuccessfulFast.jpg";
import RamadanTafseer27 from "./img/RamadanTafseer27.jpg";
import EidAlFitr from "./img/EidAlFitrKhutbah.jpg";
import Eid2021 from "./img/eid2021.jpg";
import Image from "next/image";

export default class Ramadan2021 extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/*Title */}
        {/*Banner section*/}
        <div className="container">
          <div className="row">
            <section className="banner-section">
              <div
                id="carouselExampleIndicators"
                className="carousel slide carousel-fade"
                data-ride="carousel"
                data-interval="8000"
              >
                <ol id="myCarousel-indicators" className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  ></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <Image
                      src={EidAlFitr}
                      className="img-fld"
                      alt="zafar ul hasan madani"
                      height="400px"
                      width="100%"
                    />
                  </div>
                  <div className="carousel-item ">
                    <Image
                      src={RamadanSuccessfulFast}
                      className="img-fld"
                      alt="zafar ul hasan madani"
                      height="400px"
                      width="100%"
                    />
                  </div>
                  <div className="carousel-item">
                    <Image
                      src={RamadanTafseer27}
                      className="img-fld"
                      alt="zafar ul hasan madani"
                      height="400px"
                      width="100%"
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                </a>
              </div>
            </section>
          </div>
        </div>
        {/*Title */}
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12">
                <h5 className="audio-display-head"> رمضان ١٤٤٢</h5>
                <p
                  className="lead"
                  style={{ fontFamily: "Fredoka One", fontSize: "20px" }}
                >
                  Ramadan 1442-2021
                </p>
                <hr />
              </div>
            </div>
          </div>
        </section>
        {/*Rounded Eid button */}
        {/*Rounded button links 1*/}
        <section className="embed-section">
          <div className="container-fluid py-3">
            <div className="row text-center ">
              <div className="col-md-12 d-flex justify-content-center">
                <a
                  href="https://youtu.be/zx0ohzkZfpk"
                  target="_blank"
                  rel="noreferrer noopener"
                  title="manhaj"
                >
                  <div className="rounded-links rounded-circle">
                    <Image
                      src={Eid2021}
                      className="img-fluid rounded-circle"
                      alt="ahle hadith"
                    />
                  </div>
                  <div>
                    <h3 className="rounded-headname d-flex justify-content-center">
                      Khutbah Eid-al-Fitr <br />
                      (1442/2021)
                    </h3>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/*Kamyab Rozedaar*/}
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12 d-flex justify-content-center">
                <div className="card text-center">
                  <div className="card-header pb-0 pt-2">
                    <div className="pt-2">کامیاب روزہ دار کون؟</div>
                    <p className="lead pt-3">Kamyab Rozedaar kaun</p>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <a
                          href="https://archive.org/details/ramdan-2021-1442-zafarulhasan-madani"
                          title="ramadan"
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
                        <Link
                          to="/comingsoon"
                        >
                          <a
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn btn-lg btn-outline-dark"
                          style={{
                            backgroundColor: "#2e856e",
                            color: "beige",
                            fontFamily: "Righteous",
                          }}><i className="fa fa-download" aria-hidden="true"></i>{" "}Download</a>
                        </Link>
                      </div>
                      <div className="col">
                        <a
                          href="https://www.youtube.com/watch?v=sm4X7JI2w_E&list=PLmZP1KIsC-hnCyf2bkZ3aRmA7piyq9rEA"
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
        {/*٢٧ جزء*/}
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12 d-flex justify-content-center">
                <div className="card text-center">
                  <div className="card-header pb-0 pt-2">
                    <div className="pt-2"> جزء ٢٧</div>
                    <p className="lead pt-3">Juz 27</p>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <a
                          href="https://archive.org/details/tafseer-juz-27-zafarulhasan-madani"
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
                          href="https://drive.google.com/drive/u/0/folders/1k-O0tHKvkC68OJ7E_UmPsKwT42-arFT-"
                          title="juz 27 tafseer"
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
                          href="https://www.youtube.com/c/ZafarulHasan/playlists"
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
        <section className="embed-section">
          <div className="col-md-12 text-center">
            <Footer />
          </div>
        </section>
      </div>
    );
  }
}
