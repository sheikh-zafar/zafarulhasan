/* eslint-disable @next/next/no-img-element */
import React, { Component } from "react";
import Navbar from "./nav";
import Footer from "./footer";
import bam2 from "../public/img/bulugh.jpg";
import shamail2 from "../public/img/shamail2.jpg";
import sharhsunnah3 from "../public/img/sharhsunnah3.jpg";
import mosque from "../public/img/mosque.jpg";
import Covid from "../public/img/Covid.jpg";
import Baqarah from "../public/img/baqarah.jpg";
import Sunday from "../public/img/sunday.jpg";
import monday from "../public/img/monday.jpg";
import wednesday from "../public/img/wednesday.jpg";
import saturday from "../public/img/sunday.jpg";
import Image from "next/image";
import Link from "next/link";

export default class Home extends Component {
  render() {
    return (
      <div>
        {/*Heading name and Navigation bar*/}
        <Navbar />
        <marquee behavior="scroll" className="marquee py-0" direction="left">
          <p>
            Schedule - Sunday : Al-Arba&apos;oona Nawawiyyah $ Sharh as Sunnah
            Monday : Bulugh al-Maram(Kalemah), Tuesday : Tafseer Surah
            al-baqarah, Wednesday : Bulugh al-Maram(Main), Thursday : Rahe
            Hidayat, Saturday : Shamail Muhammadiyah. Click on Get Dars
            Notification Button to add Schedule to Your Google calendar.
          </p>
        </marquee>
        {/*Banner section*/}
        <div
          id="carouselExampleIndicators"
          className="container carousel slide carousel-fade"
          data-ride="carousel"
          data-interval="8000"
        >
          <ol id="myCarousel-indicators" className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Image src={Sunday} width={1300} alt="ahle hadith" />
            </div>
            <div className="carousel-item ">
              <Image src={monday} width={1300} alt="zafar ul hasan madani" />
            </div>
            <div className="carousel-item">
              <Image src={Baqarah} width={1300} alt="surah baqarah" />
            </div>
            <div className="carousel-item">
              <Image src={wednesday} width={1300} alt="zafar ul hasan madani" />
            </div>
            <div className="carousel-item">
              <Image src={saturday} width={1300} alt="zafar ul hasan madani" />
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

        {/*Calendar and Mixlr section*/}
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-10 col-xs-12 ">
              <iframe
                title="ahle hadith"
                src="https://calendar.google.com/calendar/embed?height=250&amp;wkst=1&amp;bgcolor=%232e856e&amp;ctz=Asia%2FDubai&amp;src=M2I4cG9vczFic2lwdGhnYnA5NWhjYnZuaTRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%230B8043&amp;showNav=0&amp;showPrint=0&amp;showCalendars=0&amp;showTabs=0&amp;mode=AGENDA"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
              ></iframe>
            </div>
            <div className=" col-lg-7 col-md-7 col-sm-10 col-xs-12">
              <iframe
                title="zafarulhasan"
                src="https://mixlr.com/zafarulhasan/embed"
                width="100%"
                scrolling="no"
                frameBorder="no"
                marginHeight="0"
                marginWidth="0"
              ></iframe>
            </div>
          </div>
        </div>
        {/*Youtube, Image ,Showreel*/}
        <div className="container py-5 mx-auto">
          <div
            className="col-md-12 bg"
            style={{
              color: "#5c4033",
              fontFamily: "Pacifico family",
              fontSize: "15px",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.9), 0 6px 20px 0 rgba(0, 0, 0, 0.9)",
            }}
          >
            <div className="row">
              <div className="col-6 col-lg-3 col-md-6 col-sm-6">
                <div className="container py-3">
                  <a
                    href="https://calendar.google.com/calendar/u/0/r/month?tab=wc&pli=1"
                    role="button"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{
                      backgroundColor: "#0C3823",
                      color: "beige",
                      fontFamily: "Righteous",
                    }}
                  >
                    <i className="fa fa-calendar" aria-hidden="true"></i>{" "}
                    Calendar
                  </a>
                  <div
                    className="container  px-0 pt-1"
                    style={{ fontFamily: "Fredoka One", fontSize: "15px" }}
                  >
                    Complete Lecture Schedule
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3 col-md-6 col-sm-6">
                <div className="container py-3">
                  <Link href="/sheikh-zafar-ul-hasan-madani-links">
                    <a
                      title="salaf"
                      role="button"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                      style={{
                        backgroundColor: "#0C3823",
                        color: "beige",
                        fontFamily: "Righteous",
                      }}
                    >
                      <i className="fa fa-telegram" aria-hidden="true"></i>{" "}
                      Updates
                    </a>
                  </Link>

                  <div
                    className="container  px-0 pt-1"
                    style={{ fontFamily: "Fredoka One", fontSize: "15px" }}
                  >
                    Get Updates of Duroos
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3 col-md-6 col-sm-6">
                <div className="container py-4">
                  <a
                    href="https://www.youtube.com/channel/UC2zD7wY_3TCGCyA9Cy_Nu9w"
                    title="zafarul hasan madani"
                    role="button"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{
                      backgroundColor: "#0C3823",
                      color: "beige",
                      fontFamily: "Righteous",
                    }}
                  >
                    <i className="fa fa-youtube" aria-hidden="true"></i> YouTube
                  </a>
                  <div
                    className="container  pt-1"
                    style={{ fontFamily: "Fredoka One", fontSize: "15px" }}
                  >
                    YouTube Channel
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3 col-md-6 col-sm-6">
                <div className="container py-3">
                  <a
                    href="https://mixlr.com/zafarulhasan/showreel/"
                    title="salaf"
                    role="button"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{
                      backgroundColor: "#0C3823",
                      color: "beige",
                      fontFamily: "Righteous",
                    }}
                  >
                    <i className="fa fa-headphones" aria-hidden="true"></i>{" "}
                    Mixlr Show Reel
                  </a>
                  <div
                    className="container  px-0 pt-1"
                    style={{ fontFamily: "Fredoka One", fontSize: "15px" }}
                  >
                    Catch up on missed duroos
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Banner1*/}
        <section className="mosque">
          <div className="container ">
            <div className="row ">
              <div className="container py-4 ">
                <div className="row justify-content-center">
                  <div className="col-md-10 d-flex justify-content-center">
                    <Image src={mosque} width={600} height={200} alt="salaf" />
                  </div>
                </div>
                <div className="container text-center pt-4">
                  <div className="row justify-content-center">
                    <h5 className="display-title">Jummua&apos;h Khutbah</h5>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="row">
                    <div className="col">
                      <a
                        href="https://archive.org/embed/2021-jumuah-khutbah-zafarulhasan-madani&playlist=1&list_height=550"
                        title="ahle hadith"
                        className="lead pt-3"
                        style={{
                          fontFamily: "Fredoka One",
                          fontSize: "20px",
                          color: "beige",
                          textDecoration: "underline",
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Listen
                      </a>
                    </div>
                    <div className="col">
                      <a
                        href="https://drive.google.com/drive/folders/1al-gkHcSA5yDjFUrjoXRABxoEg5v8FbF"
                        title="zafar ul hasan madani"
                        className="lead pt-3"
                        style={{
                          fontFamily: "Fredoka One",
                          fontSize: "20px",
                          color: "beige",
                          textDecoration: "underline",
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Download
                      </a>
                    </div>
                    <div className="col">
                      <a
                        href="https://www.youtube.com/watch?v=-Zy5GaMI2_U&list=PLmZP1KIsC-hmuVCpduAT3dMDd-kZG6l4f"
                        title="manhaj"
                        className="lead pt-3"
                        style={{
                          fontFamily: "Fredoka One",
                          fontSize: "20px",
                          color: "beige",
                          textDecoration: "underline",
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Watch
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container py-4 ">
                <div className="row justify-content-center">
                  <div className="col-md-10 d-flex justify-content-center">
                    <Image src={Covid} width={600} height={200} alt="manhaj" />
                  </div>
                </div>
                <div className="container pt-4">
                  <div className="row justify-content-center">
                    <div className="text-center">
                      <h5 className="display-title">Covid-19 Lectures</h5>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="row">
                    <div className="col">
                      <a
                        href="https://archive.org/embed/corona-virus-covid-19-lectures-zafarulhasan-madani&playlist=1&list_height=550"
                        title="manhaj"
                        className="lead pt-3"
                        style={{
                          fontFamily: "Fredoka One",
                          fontSize: "20px",
                          color: "beige",
                          textDecoration: "underline",
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Listen
                      </a>
                    </div>
                    <div className="col">
                      <a
                        href="https://drive.google.com/drive/folders/1Zc_fkwZOBT74_wjYolbEPPzucJHA7ewJ"
                        title="salaf"
                        className="lead pt-3"
                        style={{
                          fontFamily: "Fredoka One",
                          fontSize: "20px",
                          color: "beige",
                          textDecoration: "underline",
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Download
                      </a>
                    </div>
                    <div className="col">
                      <a
                        href="https://www.youtube.com/watch?v=2iinT78L7Jo&list=PLmZP1KIsC-hnPUPMq7dyV3r8KVP-0G9Vi"
                        title="manhaj"
                        className="lead pt-3"
                        style={{
                          fontFamily: "Fredoka One",
                          fontSize: "20px",
                          color: "beige",
                          textDecoration: "underline",
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Watch
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container py-4 ">
                <div className="row justify-content-center">
                  <div className="col-md-10 d-flex justify-content-center">
                    <Image
                      src={sharhsunnah3}
                      width={600}
                      height={200}
                      alt="salaf"
                    />
                  </div>
                </div>
                <div className="container pt-4">
                  <div className="row justify-content-center">
                    <div className="text-center">
                      <h5 className="display-title">Sharh as-Sunnah</h5>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="row">
                    <div className="col">
                      <a
                        href="https://archive.org/embed/sharh-as-sunnah-barbaharee-zafarulhasan-madani&playlist=1&list_height=550"
                        title="zafar ul hasan madani"
                        className="lead pt-3"
                        style={{
                          fontFamily: "Fredoka One",
                          fontSize: "20px",
                          color: "beige",
                          textDecoration: "underline",
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Listen
                      </a>
                    </div>
                    <div className="col">
                      <a
                        href="https://drive.google.com/drive/u/0/folders/1FHmnB17RfmCYfZdjSpuyQ6XCt1zELR-o"
                        title="zafar ul hasan madani"
                        className="lead pt-3"
                        style={{
                          fontFamily: "Fredoka One",
                          fontSize: "20px",
                          color: "beige",
                          textDecoration: "underline",
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Download
                      </a>
                    </div>
                    <div className="col">
                      <a
                        href="https://www.youtube.com/watch?v=A_GfTdyV0Y0&list=PLmZP1KIsC-hnmXQn8oulAyQDd3l8xjyDo"
                        title="quran and sunnah"
                        className="lead pt-3"
                        style={{
                          fontFamily: "Fredoka One",
                          fontSize: "20px",
                          color: "beige",
                          textDecoration: "underline",
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Watch
                      </a>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="container py-4">
                <div className="row justify-content-center">
                  <div className="col-md-10 d-flex justify-content-center">
                    <Image src={bam2} width={600} height={200} alt="fiqh" />
                  </div>
                </div>
                <div className="container pt-4">
                  <div className="row justify-content-center">
                    <div className="text-center">
                      <h5 className="display-title">Bulugh Al Maram</h5>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="row">
                    <div className="col">
                      <a
                        href="https://archive.org/embed/sharh-bulugh-al-maram-zafarulhasan-madani&playlist=1&list_height=550"
                        title="fiqh"
                        className="lead pt-3"
                        style={{
                          fontFamily: "Fredoka One",
                          fontSize: "20px",
                          color: "beige",
                          textDecoration: "underline",
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Listen
                      </a>
                    </div>
                    <div className="col">
                      <a
                        href="https://drive.google.com/drive/u/0/folders/1msQrFTXsWmG2M76nb373wHtJFeFgl85Y"
                        title="fiqh"
                        className="lead pt-3"
                        style={{
                          fontFamily: "Fredoka One",
                          fontSize: "20px",
                          color: "beige",
                          textDecoration: "underline",
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Download
                      </a>
                    </div>
                    <div className="col">
                      <a
                        href="https://www.youtube.com/watch?v=uWYV4PLluxw&list=PLmZP1KIsC-hltNDJamXol6XA04VzJKIng"
                        title="zafar ul hasan madani"
                        className="lead pt-3"
                        style={{
                          fontFamily: "Fredoka One",
                          fontSize: "20px",
                          color: "beige",
                          textDecoration: "underline",
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Watch
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container py-4 ">
                <div className="row justify-content-center">
                  <div className="col-md-10 d-flex justify-content-center">
                    <Image
                      src={shamail2}
                      width={600}
                      height={200}
                      alt="salaf"
                    />
                  </div>
                </div>
                <div className="container pt-4">
                  <div className="row justify-content-center">
                    <div className="text-center">
                      <h5 className="display-title">
                        Shama&apos;il at Tirmidhi
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="row">
                    <div className="col">
                      <Link href="/comingsoon">
                        <a
                          title="zafar ul hasan madani"
                          className="lead pt-3"
                          style={{
                            fontFamily: "Fredoka One",
                            fontSize: "20px",
                            color: "beige",
                            textDecoration: "underline",
                          }}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Listen
                        </a>
                      </Link>
                    </div>
                    <div className="col">
                      <Link href="/comingsoon">
                        <a
                          className="lead pt-3"
                          style={{
                            fontFamily: "Fredoka One",
                            fontSize: "20px",
                            color: "beige",
                            textDecoration: "underline",
                          }}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Download
                        </a>
                      </Link>
                    </div>
                    <div className="col">
                      <a
                        href="https://www.youtube.com/watch?v=L1HK1mwyLbI&list=PLmZP1KIsC-hk_6GGFntSM-IwahZs_cJb6"
                        title="ahle hadith"
                        className="lead pt-3"
                        style={{
                          fontFamily: "Fredoka One",
                          fontSize: "20px",
                          color: "beige",
                          textDecoration: "underline",
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Watch
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*Ramadan page & Eid khutbah */}
              <section className="embed-section">
                <div className="container">
                  <div className="row text-center">
                    <div className="col-md-12 col-xs-8 col-sm-7">
                      <table className="table table-bordered tableBg">
                        <thead className="tableBg">
                          <tr className="tableBg">
                            <th scope="col" colSpan="2" className="tableBg">
                              <div
                                className="card-header"
                                style={{ color: "#5c4033" }}
                              >
                                <div> رمضان ١٤٤٢</div>
                                <p className="lead">Ramadan 1442-2021</p>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody >
                          <tr className="tablebg">
                            <th scope="col">
                              <Link href="/Ramadan-1442-2021">
                                <a
                                  role="button"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="btn btn-lg btn-outline-dark tableButton"
                                >
                                  رمضان <br />
                                  Duroos
                                </a>
                              </Link>
                            </th>
                            <th scope="col" className="tableBg">
                              <a
                                href="https://youtu.be/zx0ohzkZfpk"
                                role="button"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn btn-lg btn-outline-dark tableButton"
                              >
                                Khutbah <br />
                                Eid-ul-Fitr
                              </a>
                            </th>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>
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
