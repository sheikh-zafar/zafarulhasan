import React from "react";
import Navbar from "../../nav";
import Footer from "../../footer";
import Ramadan from "../../img/ramadan.jpg";
import Shaban from "../../img/shaban.jpg";
import Safar from "../../img/safar.jpg";
import Muharram from "../../img/muharram.jpg";
import Dhulhijjah from "../../img/dhulhijjah.jpg";
import Rajab from "../../img/rajab.jpg";
import Image from "next/image";
import Link from "next/link";

export default function mausamiyat({
  posts27,
  posts28,
  posts29,
  posts30,
  posts31,
  posts32,
  posts33,
  posts34,
  posts35,
  posts36,
  posts37,
  posts38,
  posts39,
  posts40,
  posts41,
  posts42,
}) {
  return (
    <div>
      <Navbar />
      <section className="embed-section">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <h5 className="audio-display-head">موسمية</h5>
              <p
                className="lead"
                style={{ fontFamily: "Fredoka One", fontSize: "20px" }}
              >
                Mausamiyat
              </p>
              <hr />
            </div>
          </div>
        </div>
      </section>
      <section className="embed-section">
        <div className="container ">
          <div className="row text-center ">
            <div className="col-md-4">
              <Image src={Muharram} width={200} height={200} alt="muharram" />
              <br />
              <div className="container-fluid">
                <div className="row d-flex justify-content-between">
                  <div className="pt-2">
                    <Link href="/comingsoon">
                      <a
                        rel="nooperner noreferrer"
                        target="_blank"
                        className="btn btn btn-lg btn-outline-dark "
                        style={{
                          width: "170px",
                          backgroundColor: "#5c4033",
                          color: "beige",
                          fontFamily: "Righteous",
                        }}
                      >
                        Listen
                      </a>
                    </Link>
                  </div>

                  <div className="pt-2">
                    <a
                      href="https://drive.google.com/drive/folders/1b5HZv_HcOAhF7X01w3iovI0KzIqCpprK"
                      title="muharram"
                      rel="nooperner noreferrer"
                      target="_blank"
                      className="btn btn btn-lg btn-outline-dark "
                      style={{
                        width: "170px",
                        backgroundColor: "#5c4033",
                        color: "beige",
                        fontFamily: "Righteous",
                      }}
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <Image src={Safar} width={200} height={200} alt="Safar" />
              <div className="row d-flex justify-content-between">
                <div className="pt-2">
                  <Link href="/comingsoon">
                    <a
                      rel="nooperner noreferrer"
                      target="_blank"
                      className="btn btn btn-lg btn-outline-dark "
                      style={{
                        width: "170px",
                        backgroundColor: "#5c4033",
                        color: "beige",
                        fontFamily: "Righteous",
                      }}
                    >
                      Listen
                    </a>
                  </Link>
                </div>

                <div className="pt-2">
                  <a
                    href="https://drive.google.com/drive/folders/1QLxr6xTkaik9HDA9jn02Wrz5Ghp64i0p"
                    className="btn btn btn-lg btn-outline-dark "
                    style={{
                      width: "170px",
                      backgroundColor: "#5c4033",
                      color: "beige",
                      fontFamily: "Righteous",
                    }}
                    rel="nooperner noreferrer"
                    target="_blank"
                    title="safar"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <Image src={Ramadan} width={200} height={200} alt="Ramadan" />
              <div className="pt-2">
                <a
                  href="https://archive.org/details/ramdan-2021-1442-zafarulhasan-madani"
                  rel="nooperner noreferrer"
                  target="_blank"
                  className="btn btn btn-lg btn-outline-dark"
                  style={{
                    width: "170px",
                    backgroundColor: "#5c4033",
                    color: "beige",
                    fontFamily: "Righteous",
                  }}
                >
                  <i className="fa fa-headphones" aria-hidden="true"></i> Listen
                </a>
              </div>
              <div className="pt-2">
                <a
                  href="https://drive.google.com/drive/folders/1sU6VFMVMRmzzubT2w0CYguodwGDsTd3y"
                  rel="nooperner noreferrer"
                  target="_blank"
                  title="ramadan"
                  className="btn btn btn-lg btn-outline-dark "
                  style={{
                    width: "170px",
                    backgroundColor: "#5c4033",
                    color: "beige",
                    fontFamily: "Righteous",
                  }}
                >
                  <i className="fa fa-download" aria-hidden="true"></i> Download
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row text-center">
            <div className="col-md-4">
              <Image src={Rajab} width={200} height={200} alt="Rajab" />
              <div className="row d-flex justify-content-between">
                <div className="pt-2">
                  <Link href="/comingsoon">
                    <a
                      rel="nooperner noreferrer"
                      target="_blank"
                      className="btn btn btn-lg btn-outline-dark "
                      style={{
                        width: "170px",
                        backgroundColor: "#5c4033",
                        color: "beige",
                        fontFamily: "Righteous",
                      }}
                    >
                      Listen
                    </a>
                  </Link>
                </div>

                <div className="pt-2">
                  <a
                    href="https://drive.google.com/drive/folders/1D57h2I6_UyjknJBqtn6PWaNhGe8Hx7fR"
                    className="btn btn btn-lg btn-outline-dark "
                    style={{
                      width: "170px",
                      backgroundColor: "#5c4033",
                      color: "beige",
                      fontFamily: "Righteous",
                    }}
                    rel="nooperner noreferrer"
                    target="_blank"
                    title="rajab"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <Image
                src={Dhulhijjah}
                width={200}
                height={200}
                alt="Dhulhijjah"
              />
              <div className="row d-flex justify-content-between">
                <div className="pt-2">
                  <Link href="/comingsoon">
                    <a
                      rel="nooperner noreferrer"
                      target="_blank"
                      className="btn btn btn-lg btn-outline-dark "
                      style={{
                        width: "170px",
                        backgroundColor: "#5c4033",
                        color: "beige",
                        fontFamily: "Righteous",
                      }}
                    >
                      Listen
                    </a>
                  </Link>
                </div>

                <div className="pt-2">
                  <a
                    href="https://drive.google.com/drive/folders/1PiPdszibzFuRKipSHQvlVe79TdWNZoWW"
                    className="btn btn btn-lg btn-outline-dark "
                    style={{
                      width: "170px",
                      backgroundColor: "#5c4033",
                      color: "beige",
                      fontFamily: "Righteous",
                    }}
                    rel="nooperner noreferrer"
                    target="_blank"
                    title="dhulhijjah"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <Image src={Shaban} width={200} height={200} alt="Shaban" />{" "}
              <div className="row d-flex justify-content-between">
                <div className="pt-2">
                  <Link href="/comingsoon">
                    <a
                      rel="nooperner noreferrer"
                      target="_blank"
                      className="btn btn btn-lg btn-outline-dark "
                      style={{
                        width: "170px",
                        backgroundColor: "#5c4033",
                        color: "beige",
                        fontFamily: "Righteous",
                      }}
                    >
                      Listen
                    </a>
                  </Link>
                </div>

                <div className="pt-2">
                  <a
                    href="https://drive.google.com/drive/folders/13laZlvbf1xL-pA-g1Y23AjYlDbW2ck2P"
                    className="btn btn btn-lg btn-outline-dark "
                    style={{
                      width: "170px",
                      backgroundColor: "#5c4033",
                      color: "beige",
                      fontFamily: "Righteous",
                    }}
                    rel="nooperner noreferrer"
                    target="_blank"
                    title="shaban"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="embed-section">
        {/*Youtube accordion */}
        <div className="container">
          <div className="row mausamiyatmargin">
            <div
              className="accordion"
              id="accordionExample"
              style={{ color: "#5c4033" }}
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading1">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse1"
                    aria-expanded="true"
                    aria-controls="collapse1"
                  >
                    Watch On YouTube
                  </button>
                </h2>
                <div
                  id="collapse1"
                  className="accordion-collapse collapse "
                  aria-labelledby="heading1"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <ul className="list-group list-group-flush text-center">
                      <li className="list-group-item">
                        {" "}
                        <a
                          href="https://www.youtube.com/watch?v=oybD_6uY-vY&list=PLmZP1KIsC-hn1-9x2ug-sN1KB3gNVDMTn"
                          title="muharram"
                          className="orderlist"
                          rel="nooperner noreferrer"
                          target="_blank"
                        >
                          Muharram
                        </a>
                      </li>
                      <li className="list-group-item">
                        <a
                          href="https://www.youtube.com/watch?v=LJ6TRqr-vNU&list=PLmZP1KIsC-hkLgMl1NwJx5QbeyEKDzAp2"
                          title="safar"
                          className="orderlist"
                          rel="nooperner noreferrer"
                          target="_blank"
                        >
                          Safar
                        </a>
                      </li>
                      <li className="list-group-item">
                        {" "}
                        <a
                          href="https://www.youtube.com/c/ZafarulHasan/featured"
                          title="rajab"
                          className="orderlist"
                          rel="nooperner noreferrer"
                          target="_blank"
                        >
                          Rajab
                        </a>
                      </li>
                      <li className="list-group-item">
                        {" "}
                        <a
                          href="https://www.youtube.com/c/ZafarulHasan/featured"
                          title="shaban"
                          className="orderlist"
                          rel="nooperner noreferrer"
                          target="_blank"
                        >
                          Shaban
                        </a>
                      </li>
                      <li className="list-group-item">
                        <a
                          href="https://www.youtube.com/watch?v=pVxV0Y545GY&list=PLmZP1KIsC-hlJlkxP7gRWagKJKfm018Qm"
                          title="ramadan lectures"
                          className="orderlist"
                          rel="nooperner noreferrer"
                          target="_blank"
                        >
                          Ramadan
                        </a>
                      </li>
                      <li className="list-group-item">
                        <a
                          href="https://www.youtube.com/watch?v=tTbR9WDuBFU&list=PLmZP1KIsC-hk7iLLDpySTIjBwEovtsNS0"
                          title="ramadan"
                          className="orderlist"
                          rel="nooperner noreferrer"
                          target="_blank"
                        >
                          Dhul Hijjah
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="embed-section">
          <div className="container">
            <div className="row mausamiyatmargin">
              {/*Year 42 */}
              <div
                className="accordion"
                id="accordionExample"
                style={{ color: "#5c4033" }}
              >
                <div className="accordion-item ">
                  <h2 className="accordion-header " id="headingSixteen">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSixteen"
                      aria-expanded="true"
                      aria-controls="collapseSixteen"
                    >
                      1442 [2020 - 2021]
                    </button>
                    {posts42.map((post) => (
                      <div key={post.hijri}>
                        <div
                          id="collapseSixteen"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingSixteen"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body d-flex justify-content-center">
                            <div className="row">
                              <div
                                className="col-md-4 col-xs-4 col-sm-4"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                }}
                              >
                                {post.month}
                              </div>
                              <div className="col-md-4 col-xs-4 col-sm-4">
                                <a
                                  href={post.archive}
                                  className="lead pt-3"
                                  style={{
                                    fontFamily: "Fredoka One",
                                    fontSize: "20px",
                                    color: "#5c4033",
                                    textDecoration: "underline",
                                  }}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Listen
                                </a>
                              </div>
                              <div className="col-md-4 col-xs-4 col-sm-4">
                                <a
                                  href={post.drive}
                                  className="lead pt-3"
                                  style={{
                                    fontFamily: "Fredoka One",
                                    fontSize: "20px",
                                    color: "#5c4033",
                                    textDecoration: "underline",
                                  }}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Download
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="collapseSixteen"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingSixteen"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body d-flex justify-content-center">
                            <div className="row">
                              <div
                                className="col-md-4 col-xs-4 col-sm-4"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                }}
                              >
                                {post.month}
                              </div>
                              <div className="col-md-4 col-xs-4 col-sm-4">
                                <a
                                  href={post.archive}
                                  className="lead pt-3"
                                  style={{
                                    fontFamily: "Fredoka One",
                                    fontSize: "20px",
                                    color: "#5c4033",
                                    textDecoration: "underline",
                                  }}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Listen
                                </a>
                              </div>
                              <div className="col-md-4 col-xs-4 col-sm-4">
                                <a
                                  href={post.drive}
                                  className="lead pt-3"
                                  style={{
                                    fontFamily: "Fredoka One",
                                    fontSize: "20px",
                                    color: "#5c4033",
                                    textDecoration: "underline",
                                  }}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Download
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="embed-section">
        <div className="container">
          <div className="row mausamiyatmargin">
            {/*Year 41 */}
            <div
              className="accordion"
              id="accordionExample"
              style={{ color: "#5c4033" }}
            >
              <div className="accordion-item ">
                <h2 className="accordion-header " id="headingFifteen">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFifteen"
                    aria-expanded="true"
                    aria-controls="collapseFifteen"
                  >
                    1441 [2019 - 2020]
                  </button>
                  {posts41.map((post) => (
                    <div key={post.hijri}>
                      <div
                        id="collapseFifteen"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFifteen"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body d-flex justify-content-center">
                          <div className="row">
                            <div
                              className="col-md-4 col-xs-4 col-sm-4"
                              style={{
                                fontFamily: "Fredoka One",
                                fontSize: "20px",
                                color: "#5c4033",
                              }}
                            >
                              {post.month}
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.archive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Listen
                              </a>
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.drive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Download
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="collapseFifteen"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFifteen"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body d-flex justify-content-center">
                          <div className="row">
                            <div
                              className="col-md-4 col-xs-4 col-sm-4"
                              style={{
                                fontFamily: "Fredoka One",
                                fontSize: "20px",
                                color: "#5c4033",
                              }}
                            >
                              {post.month}
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.archive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Listen
                              </a>
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.drive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Download
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="embed-section">
        <div className="container">
          <div className="row mausamiyatmargin">
            {/*Year 40 */}
            <div
              className="accordion"
              id="accordionExample"
              style={{ color: "#5c4033" }}
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFourteen">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFourteen"
                    aria-expanded="true"
                    aria-controls="collapseFourteen"
                  >
                    1440 [2018 - 2019]
                  </button>
                  {posts40.map((post) => (
                    <div key={post.hijri}>
                      <div
                        id="collapseFourteen"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFourteen"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body d-flex justify-content-center">
                          <div className="row">
                            <div
                              className="col-md-4 col-xs-4 col-sm-4"
                              style={{
                                fontFamily: "Fredoka One",
                                fontSize: "20px",
                                color: "#5c4033",
                              }}
                            >
                              {post.month}
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.archive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Listen
                              </a>
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.drive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Download
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="collapseFourteen"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFourteen"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body d-flex justify-content-center">
                          <div className="row">
                            <div
                              className="col-md-4 col-xs-4 col-sm-4"
                              style={{
                                fontFamily: "Fredoka One",
                                fontSize: "20px",
                                color: "#5c4033",
                              }}
                            >
                              {post.month}
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.archive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Listen
                              </a>
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.drive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Download
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="embed-section">
        <div className="container">
          <div className="row mausamiyatmargin">
            {/*Year 39 */}
            <div
              className="accordion"
              id="accordionExample"
              style={{ color: "#5c4033" }}
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThirteen">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThirteen"
                    aria-expanded="true"
                    aria-controls="collapseThirteen"
                  >
                    1439 [2017 - 2018]
                  </button>
                  {posts39.map((post) => (
                    <div key={post.hijri}>
                      <div
                        id="collapseThirteen"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThirteen"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body d-flex justify-content-center">
                          <div className="row">
                            <div
                              className="col-md-4 col-xs-4 col-sm-4"
                              style={{
                                fontFamily: "Fredoka One",
                                fontSize: "20px",
                                color: "#5c4033",
                              }}
                            >
                              {post.month}
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.archive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Listen
                              </a>
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.drive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Download
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="collapseThirteen"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThirteen"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body d-flex justify-content-center">
                          <div className="row">
                            <div
                              className="col-md-4 col-xs-4 col-sm-4"
                              style={{
                                fontFamily: "Fredoka One",
                                fontSize: "20px",
                                color: "#5c4033",
                              }}
                            >
                              {post.month}
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.archive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Listen
                              </a>
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.drive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Download
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="embed-section">
        <div className="container">
          <div className="row mausamiyatmargin">
            {/*Year 38 */}
            <div
              className="accordion"
              id="accordionExample"
              style={{ color: "#5c4033" }}
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwelve">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwelve"
                    aria-expanded="true"
                    aria-controls="collapseTwelve"
                  >
                    1438 [2016 - 2017]
                  </button>
                  {posts38.map((post) => (
                    <div key={post.hijri}>
                      <div
                        id="collapseTwelve"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwelve"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body d-flex justify-content-center">
                          <div className="row">
                            <div
                              className="col-md-4 col-xs-4 col-sm-4"
                              style={{
                                fontFamily: "Fredoka One",
                                fontSize: "20px",
                                color: "#5c4033",
                              }}
                            >
                              {post.month}
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.archive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Listen
                              </a>
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.drive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Download
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="collapseTwelve"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwelve"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body d-flex justify-content-center">
                          <div className="row">
                            <div
                              className="col-md-4 col-xs-4 col-sm-4"
                              style={{
                                fontFamily: "Fredoka One",
                                fontSize: "20px",
                                color: "#5c4033",
                              }}
                            >
                              {post.month}
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.archive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Listen
                              </a>
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.drive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Download
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="embed-section">
        <div className="container">
          <div className="row mausamiyatmargin">
            {/*Year 37 */}
            <div
              className="accordion"
              id="accordionExample"
              style={{ color: "#5c4033" }}
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingEleven">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseEleven"
                    aria-expanded="true"
                    aria-controls="collapseEleven"
                  >
                    1437 [2015 - 2016]
                  </button>
                  {posts37.map((post) => (
                    <div key={post.hijri}>
                      <div
                        id="collapseEleven"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingEleven"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body d-flex justify-content-center">
                          <div className="row">
                            <div
                              className="col-md-4 col-xs-4 col-sm-4"
                              style={{
                                fontFamily: "Fredoka One",
                                fontSize: "20px",
                                color: "#5c4033",
                              }}
                            >
                              {post.month}
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.archive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Listen
                              </a>
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.drive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Download
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="collapseEleven"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingEleven"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body d-flex justify-content-center">
                          <div className="row">
                            <div
                              className="col-md-4 col-xs-4 col-sm-4"
                              style={{
                                fontFamily: "Fredoka One",
                                fontSize: "20px",
                                color: "#5c4033",
                              }}
                            >
                              {post.month}
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.archive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Listen
                              </a>
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.drive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Download
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="embed-section">
        <div className="container">
          <div className="row mausamiyatmargin">
            {/*Year 36 */}
            <div
              className="accordion"
              id="accordionExample"
              style={{ color: "#5c4033" }}
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTen">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTen"
                    aria-expanded="true"
                    aria-controls="collapseTen"
                  >
                    1436 [2014 - 2015]
                  </button>
                  {posts36.map((post) => (
                    <div key={post.hijri}>
                      <div
                        id="collapseTen"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTen"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body d-flex justify-content-center">
                          <div className="row">
                            <div
                              className="col-md-4 col-xs-4 col-sm-4"
                              style={{
                                fontFamily: "Fredoka One",
                                fontSize: "20px",
                                color: "#5c4033",
                              }}
                            >
                              {post.month}
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.archive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Listen
                              </a>
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.drive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Download
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="collapseTen"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTen"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body d-flex justify-content-center">
                          <div className="row">
                            <div
                              className="col-md-4 col-xs-4 col-sm-4"
                              style={{
                                fontFamily: "Fredoka One",
                                fontSize: "20px",
                                color: "#5c4033",
                              }}
                            >
                              {post.month}
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.archive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Listen
                              </a>
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.drive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Download
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="embed-section">
        <div className="container">
          <div className="row mausamiyatmargin">
            {/*Year 35 */}
            <div
              className="accordion"
              id="accordionExample"
              style={{ color: "#5c4033" }}
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingNine">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseNine"
                    aria-expanded="true"
                    aria-controls="collapseNine"
                  >
                    1435 [2013 - 2014]
                  </button>
                  {posts35.map((post) => (
                    <div key={post.hijri}>
                      <div
                        id="collapseNine"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingNine"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body d-flex justify-content-center">
                          <div className="row">
                            <div
                              className="col-md-4 col-xs-4 col-sm-4"
                              style={{
                                fontFamily: "Fredoka One",
                                fontSize: "20px",
                                color: "#5c4033",
                              }}
                            >
                              {post.month}
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.archive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Listen
                              </a>
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.drive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Download
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="collapseNine"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingNine"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body d-flex justify-content-center">
                          <div className="row">
                            <div
                              className="col-md-4 col-xs-4 col-sm-4"
                              style={{
                                fontFamily: "Fredoka One",
                                fontSize: "20px",
                                color: "#5c4033",
                              }}
                            >
                              {post.month}
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.archive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Listen
                              </a>
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.drive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Download
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="embed-section">
        <div className="container">
          <div className="row mausamiyatmargin">
            {/*Year 34 */}
            <div
              className="accordion"
              id="accordionExample"
              style={{ color: "#5c4033" }}
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingEight">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseEight"
                    aria-expanded="true"
                    aria-controls="collapseEight"
                  >
                    1434 [2012 - 2013]
                  </button>
                  {posts34.map((post) => (
                    <div key={post.hijri}>
                      <div
                        id="collapseEight"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingEight"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body d-flex justify-content-center">
                          <div className="row">
                            <div
                              className="col-md-4 col-xs-4 col-sm-4"
                              style={{
                                fontFamily: "Fredoka One",
                                fontSize: "20px",
                                color: "#5c4033",
                              }}
                            >
                              {post.month}
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.archive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Listen
                              </a>
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.drive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Download
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="collapseEight"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingEight"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body d-flex justify-content-center">
                          <div className="row">
                            <div
                              className="col-md-4 col-xs-4 col-sm-4"
                              style={{
                                fontFamily: "Fredoka One",
                                fontSize: "20px",
                                color: "#5c4033",
                              }}
                            >
                              {post.month}
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.archive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Listen
                              </a>
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.drive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Download
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="embed-section">
        <div className="container">
          <div className="row mausamiyatmargin">
            {/*Year 33 */}
            <div
              className="accordion"
              id="accordionExample"
              style={{ color: "#5c4033" }}
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSeven">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSeven"
                    aria-expanded="true"
                    aria-controls="collapseSeven"
                  >
                    1433 [2011 - 2012]
                  </button>
                  {posts33.map((post) => (
                    <div key={post.hijri}>
                      <div
                        id="collapseSeven"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSeven"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body d-flex justify-content-center">
                          <div className="row">
                            <div
                              className="col-md-4 col-xs-4 col-sm-4"
                              style={{
                                fontFamily: "Fredoka One",
                                fontSize: "20px",
                                color: "#5c4033",
                              }}
                            >
                              {post.month}
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.archive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Listen
                              </a>
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.drive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Download
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="collapseSeven"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSeven"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body d-flex justify-content-center">
                          <div className="row">
                            <div
                              className="col-md-4 col-xs-4 col-sm-4"
                              style={{
                                fontFamily: "Fredoka One",
                                fontSize: "20px",
                                color: "#5c4033",
                              }}
                            >
                              {post.month}
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.archive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Listen
                              </a>
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.drive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Download
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="embed-section">
        <div className="container">
          <div className="row mausamiyatmargin">
            {/*Year 32 */}
            <div
              className="accordion"
              id="accordionExample"
              style={{ color: "#5c4033" }}
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSix">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="true"
                    aria-controls="collapseSix"
                  >
                    1432 [2010 - 2011]
                  </button>
                  {posts32.map((post) => (
                    <div key={post.hijri}>
                      <div
                        id="collapseSix"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSix"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body d-flex justify-content-center">
                          <div className="row">
                            <div
                              className="col-md-4 col-xs-4 col-sm-4"
                              style={{
                                fontFamily: "Fredoka One",
                                fontSize: "20px",
                                color: "#5c4033",
                              }}
                            >
                              {post.month}
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.archive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Listen
                              </a>
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.drive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Download
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="collapseSix"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSix"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body d-flex justify-content-center">
                          <div className="row">
                            <div
                              className="col-md-4 col-xs-4 col-sm-4"
                              style={{
                                fontFamily: "Fredoka One",
                                fontSize: "20px",
                                color: "#5c4033",
                              }}
                            >
                              {post.month}
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.archive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Listen
                              </a>
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.drive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Download
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="embed-section">
        <div className="container">
          <div className="row mausamiyatmargin">
            {/*Year 31 */}
            <div
              className="accordion"
              id="accordionExample"
              style={{ color: "#5c4033" }}
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="true"
                    aria-controls="collapseFive"
                  >
                    1431 [2009 - 2010]
                  </button>
                  {posts31.map((post) => (
                    <div key={post.hijri}>
                      <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body d-flex justify-content-center">
                          <div className="row">
                            <div
                              className="col-md-4 col-xs-4 col-sm-4"
                              style={{
                                fontFamily: "Fredoka One",
                                fontSize: "20px",
                                color: "#5c4033",
                              }}
                            >
                              {post.month}
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.archive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Listen
                              </a>
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.drive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Download
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body d-flex justify-content-center">
                          <div className="row">
                            <div
                              className="col-md-4 col-xs-4 col-sm-4"
                              style={{
                                fontFamily: "Fredoka One",
                                fontSize: "20px",
                                color: "#5c4033",
                              }}
                            >
                              {post.month}
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.archive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Listen
                              </a>
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.drive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Download
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="embed-section">
        <div className="container">
          <div className="row mausamiyatmargin">
            {/*Year 30 */}
            <div
              className="accordion"
              id="accordionExample"
              style={{ color: "#5c4033" }}
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="true"
                    aria-controls="collapseFour"
                  >
                    1430 [2008 - 2009]
                  </button>
                  {posts30.map((post) => (
                    <div key={post.hijri}>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body d-flex justify-content-center">
                          <div className="row">
                            <div
                              className="col-md-4 col-xs-4 col-sm-4"
                              style={{
                                fontFamily: "Fredoka One",
                                fontSize: "20px",
                                color: "#5c4033",
                              }}
                            >
                              {post.month}
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.archive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Listen
                              </a>
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.drive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Download
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body d-flex justify-content-center">
                          <div className="row">
                            <div
                              className="col-md-4 col-xs-4 col-sm-4"
                              style={{
                                fontFamily: "Fredoka One",
                                fontSize: "20px",
                                color: "#5c4033",
                              }}
                            >
                              {post.month}
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.archive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Listen
                              </a>
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.drive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Download
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*1429 */}
      <section className="embed-section">
        <div className="container">
          <div className="row mausamiyatmargin">
            <div
              className="accordion"
              id="accordionExample"
              style={{ color: "#5c4033" }}
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="true"
                    aria-controls="collapseThree"
                  >
                    1429 [2007 - 2008]
                  </button>
                  {posts29.map((post) => (
                    <div key={post.hijri}>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body d-flex justify-content-center">
                          <div className="row">
                            <div
                              className="col-md-4 col-xs-4 col-sm-4"
                              style={{
                                fontFamily: "Fredoka One",
                                fontSize: "20px",
                                color: "#5c4033",
                              }}
                            >
                              {post.month}
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.archive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Listen
                              </a>
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.drive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Download
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body d-flex justify-content-center">
                          <div className="row">
                            <div
                              className="col-md-4 col-xs-4 col-sm-4"
                              style={{
                                fontFamily: "Fredoka One",
                                fontSize: "20px",
                                color: "#5c4033",
                              }}
                            >
                              {post.month}
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.archive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Listen
                              </a>
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.drive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Download
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*1428 */}
      <section className="embed-section">
        <div className="container">
          <div className="row mausamiyatmargin">
            <div
              className="accordion"
              id="accordionExample"
              style={{ color: "#5c4033" }}
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                  >
                    1428 [2006 - 2007]
                  </button>
                  {posts28.map((post) => (
                    <div key={post.hijri}>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body d-flex justify-content-center">
                          <div className="row">
                            <div
                              className="col-md-4 col-xs-4 col-sm-4"
                              style={{
                                fontFamily: "Fredoka One",
                                fontSize: "20px",
                                color: "#5c4033",
                              }}
                            >
                              {post.month}
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.archive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Listen
                              </a>
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.drive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Download
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body d-flex justify-content-center">
                          <div className="row">
                            <div
                              className="col-md-4 col-xs-4 col-sm-4"
                              style={{
                                fontFamily: "Fredoka One",
                                fontSize: "20px",
                                color: "#5c4033",
                              }}
                            >
                              {post.month}
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.archive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Listen
                              </a>
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.drive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Download
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*1427 */}
      <section className="embed-section">
        <div className="container">
          <div className="row mausamiyatmargin">
            <div
              className="accordion"
              id="accordionExample"
              style={{ color: "#5c4033" }}
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    1427 [2005 - 2006]
                  </button>
                  {posts27.map((post) => (
                    <div key={post.hijri}>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body d-flex justify-content-center">
                          <div className="row">
                            <div
                              className="col-md-4 col-xs-4 col-sm-4"
                              style={{
                                fontFamily: "Fredoka One",
                                fontSize: "20px",
                                color: "#5c4033",
                              }}
                            >
                              {post.month}
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.archive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Listen
                              </a>
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.drive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Download
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body d-flex justify-content-center">
                          <div className="row">
                            <div
                              className="col-md-4 col-xs-4 col-sm-4"
                              style={{
                                fontFamily: "Fredoka One",
                                fontSize: "20px",
                                color: "#5c4033",
                              }}
                            >
                              {post.month}
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.archive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Listen
                              </a>
                            </div>
                            <div className="col-md-4 col-xs-4 col-sm-4">
                              <a
                                href={post.drive}
                                className="lead pt-3"
                                style={{
                                  fontFamily: "Fredoka One",
                                  fontSize: "20px",
                                  color: "#5c4033",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Download
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export async function getStaticProps() {
  const res27 = await fetch(`https://zafar-madani.vercel.app/api/year_1427`);
  const res28 = await fetch(`https://zafar-madani.vercel.app/api/year_1428`);
  const res29 = await fetch(`https://zafar-madani.vercel.app/api/year_1429`);
  const res30 = await fetch(`https://zafar-madani.vercel.app/api/year_1430`);
  const res31 = await fetch(`https://zafar-madani.vercel.app/api/year_1431`);
  const res32 = await fetch(`https://zafar-madani.vercel.app/api/year_1432`);
  const res33 = await fetch(`https://zafar-madani.vercel.app/api/year_1433`);
  const res34 = await fetch(`https://zafar-madani.vercel.app/api/year_1434`);
  const res35 = await fetch(`https://zafar-madani.vercel.app/api/year_1435`);
  const res36 = await fetch(`https://zafar-madani.vercel.app/api/year_1436`);
  const res37 = await fetch(`https://zafar-madani.vercel.app/api/year_1437`);
  const res38 = await fetch(`https://zafar-madani.vercel.app/api/year_1438`);
  const res39 = await fetch(`https://zafar-madani.vercel.app/api/year_1439`);
  const res40 = await fetch(`https://zafar-madani.vercel.app/api/year_1440`);
  const res41 = await fetch(`https://zafar-madani.vercel.app/api/year_1441`);
  const res42 = await fetch(`https://zafar-madani.vercel.app/api/year_1442`);
  const posts27 = await res27.json();
  const posts28 = await res28.json();
  const posts29 = await res29.json();
  const posts30 = await res30.json();
  const posts31 = await res31.json();
  const posts32 = await res32.json();
  const posts33 = await res33.json();
  const posts34 = await res34.json();
  const posts35 = await res35.json();
  const posts36 = await res36.json();
  const posts37 = await res37.json();
  const posts38 = await res38.json();
  const posts39 = await res39.json();
  const posts40 = await res40.json();
  const posts41 = await res41.json();
  const posts42 = await res42.json();

  return {
    props: {
      posts27,
      posts28,
      posts29,
      posts30,
      posts31,
      posts32,
      posts33,
      posts34,
      posts35,
      posts36,
      posts37,
      posts38,
      posts39,
      posts40,
      posts41,
      posts42,
    },
  };
}
