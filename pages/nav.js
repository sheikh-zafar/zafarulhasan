import React, { Component } from "react";
import SheikhName from "./img/sheikhname.png";
import QuranHadith1Arabic from "./img/Quran&Hadith1Arabic.png";
import QuranHadith1Urdu from "./img/Quran&Hadith1Urdu.png";
import QuranHadith1English from "./img/Quran&Hadith1English.png";
import QuranHadith2Arabic from "./img/Quran&Hadith2Arabic.png";
import QuranHadith2Urdu from "./img/Quran&Hadith2Urdu.png";
import QuranHadith2English from "./img/Quran&Hadith2English.png";
import Link from "next/link";
import Image from "next/image";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <section className="heading-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-7">
                <div
                  id="carouselExampleFade"
                  className="carousel slide carousel-fade"
                  data-ride="carousel"
                  data-interval="2500"
                >
                  <div className="carousel-inner ayah">
                    <div className="carousel-item active">
                      <Image
                        src={QuranHadith1Arabic}
                        alt="ahle hadith"
                      />
                    </div>
                    <div className="carousel-item ">
                      <Image
                        src={QuranHadith1Urdu}
                        alt="salafi"
                      />
                    </div>
                    <div className="carousel-item">
                      <Image
                        src={QuranHadith1English}
                        alt="salafi"
                      />
                    </div>
                    <div className="carousel-item">
                      <Image
                        src={QuranHadith2Arabic}
                        alt="manhaj salaf"
                      />
                    </div>
                    <div className="carousel-item ">
                      <Image
                        src={QuranHadith2Urdu}
                        alt="salafi"
                      />
                    </div>
                    <div className="carousel-item">
                      <Image
                        src={QuranHadith2English}
                        alt="salafi"
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleFade"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleFade"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <div className="col-md-5">
                <Image
                  src={SheikhName}
                  alt="zafar ul hasan madani"
                />
              </div>
            </div>
          </div>

          <nav className="navbar navbar-expand-md navbar-color center">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i
                className="fa fa-2x fa-bars"
                style={{
                  color: "#5c4033",
                  fontSize: "20px",
                }}
              >
                Menu
              </i>
            </button>
            <div className="d-flex d-block flex-row mx-auto mx-0">
              <div
                className="collapse navbar-collapse "
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link href="/">
                      <a className="nav-link" title="zafar ul hasan madani">
                        Home
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/schedule">
                      <a className="nav-link" title="zafar ul hasan madani">
                        Schedule
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/lectures">
                      <a className="nav-link" title="zafar ul hasan madani">
                        Duroos
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/comingsoon">
                      <a className="nav-link" title="zafar ul hasan madani">
                        Books
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/about">
                      <a className="nav-link" title="zafar ul hasan madani">
                        About Shaikh
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </section>
      </div>
    );
  }
}
