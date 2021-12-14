import React, { Component } from "react";
import Navbar from "./nav";
import Footer from "./footer";
import Link from "next/link";
import Jummuah from "../public/img/jummaicon.jpg";
import tafseer from "../public/img/tafseericon.jpg";
import Moon from "../public/img/moon.jpg";
import Arkan from "../public/img/arkan.jpg";
import Taweel from "../public/img/taweel.jpeg";
import Mukhtasar from "../public/img/mukhtasar.jpeg";
import Aam from "../public/img/aam.jpg";
import SisterSection from "../public/img/sistersection.jpg";
import AhleHadith from "../public/img/ahlehadith.jpg";
import Image from "next/image";
export default class audio extends Component {
  handleClick() {
    this.props.history.push("shkzafar/audio/tadweensunnah");
  }

  render() {
    return (
      <div>
        <Navbar />
        {/*Rounded button links 1*/}
        <section className="embed-section">
          <div className="container-fluid py-3">
            <div className="row text-center ">
              <div className="col-md-3 col-sm-12 col-xs-12 d-flex justify-content-center marginJummahPhone">
                <Link href="/lectures/jummuah" title="manhaj">
                  <a>
                    <div className="rounded-links rounded-circle">
                      <Image
                        src={Jummuah}
                        className="img-fluid rounded-circle"
                        alt="ahle hadith"
                      />
                    </div>
                    <div>
                      <h3 className="rounded-headname">Jumu&apos;ah Khutbah</h3>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="col-md-3 col-sm-12 col-xs-12 d-flex justify-content-center marginTafseerPhone">
                <Link href="/lectures/qurantafseer" title="hadeeth">
                  <a>
                    <div className="rounded-links rounded-circle">
                      <Image
                        src={tafseer}
                        className="img-fluid rounded-circle"
                        alt="quran"
                      />
                    </div>
                    <div>
                      <h3 className="rounded-headname">Quran Tafseer</h3>
                    </div>
                  </a>
                </Link>
              </div>

              <div className="col-md-3 col-sm-12 col-xs-12 d-flex justify-content-center marginArkanPhone">
                <Link href="/comingsoon">
                  <a
                    title="pillars of islam"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="rounded-links rounded-circle">
                      <Image
                        src={Arkan}
                        className="img-fluid rounded-circle"
                        alt="Pillars of Islam"
                      />
                    </div>
                    <div>
                      <h3 className="rounded-headname">Arkan al-Islam</h3>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="col-md-3 col-sm-12 col-xs-6 d-flex justify-content-end d-sm-flex justify-content-center ">
                <Link href="/lectures/mausamiyat">
                  <a>
                    <div className="rounded-links rounded-circle">
                      <Image
                        src={Moon}
                        className="img-fluid rounded-circle"
                        alt="zafar ul hasan madani"
                      />
                    </div>
                    <div>
                      <h3 className="rounded-headname">Mausamiat</h3>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/*Rounded button links 2 */}
        <section className="embed-section">
          <div className="container py-3">
            <div className="row text-center">
              <div className="col-md-5 col-sm-12 col-xs-12 d-flex justify-content-center marginTaweelPhone">
                <Link href="/lectures/taweel" title="islam">
                  <a>
                    <div className="rounded-links rounded-circle">
                      <Image
                        src={Taweel}
                        className="img-fluid rounded-circle"
                        alt="islam"
                      />
                    </div>
                    <div>
                      <h3 className="rounded-headname">
                        {" "}
                        Dawrah ilmiyyah
                        <br />
                        <p className="lead">(Taweel)</p>
                      </h3>
                    </div>
                  </a>
                </Link>
              </div>

              <div className="col-md-3 col-sm-12 col-xs-12 d-flex justify-content-center marginMukhtasarPhone">
                <Link href="/lectures/muktasar" title="quran">
                  <a>
                    <div className="rounded-links rounded-circle">
                      <Image
                        src={Mukhtasar}
                        className="img-fluid rounded-circle"
                        alt="manhaj"
                      />
                    </div>
                    <div>
                      <h3 className="rounded-headname">
                        Dawrah ilmiyyah
                        <br />
                        <p className="lead">(Mukhtasar)</p>
                      </h3>
                    </div>
                  </a>
                </Link>
              </div>

              <div className="col-md-3 col-sm-12 col-xs-12 d-flex justify-content-center marginAamPhone">
                <Link href="/lectures/aam" title="ahle hadith">
                  <a>
                    <div className="rounded-links rounded-circle">
                      <Image
                        src={Aam}
                        className="img-fluid rounded-circle"
                        alt="zafar ul hasan madani"
                      />
                    </div>
                    <div>
                      <h3 className="rounded-headname">Aam Duroos</h3>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/*Rounded button links 2*/}
        <section className="embed-section">
          <div className="container-fluid py-3">
            <div className="row text-center ">
              <div className="col-md-5 col-sm-12 col-xs-12 d-md-flex justify-content-end marginSisterPhone">
                <Link href="/lectures/sisters-section" title="ahle hadith">
                  <a>
                    <div className="rounded-links rounded-circle">
                      <Image
                        src={SisterSection}
                        className="img-fluid rounded-circle"
                        alt="manhaj"
                      />
                    </div>
                    <div>
                      <h3 className="rounded-headname">
                        Sister&apos;s Section
                      </h3>
                    </div>
                  </a>
                </Link>
              </div>

              <div className="col-md-7 col-sm-12 col-xs-12 d-flex justify-content-center marginAhlulPhone">
                <Link href="/comingsoon">
                  <a
                    title="ahle hadees"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="rounded-links rounded-circle">
                      <Image
                        src={AhleHadith}
                        className="img-fluid rounded-circle"
                        alt="ahle hadith"
                      />
                    </div>
                    <div>
                      <h3 className="rounded-headname">
                        Tareeq Ahlul <br />
                        Hadith
                      </h3>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/*audio cards */}
        <section className="embed-section"></section>
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
