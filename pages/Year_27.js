import React, { Component } from "react";
import  Link from "next/link";
import { year_1427 } from "./api/year_1427";

export default class Year_27 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year1427: year_1427,
    };
  }
  render() {
    return this.state.year1427.map((year27) => {
      return (
        <div
          id="collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
          key={year27.year}
        >
          <div className="accordion-body d-flex justify-content-center">
            <div className="row">
              <div
                className="col-md-3 col-xs-3 col-sm-3"
                style={{
                  fontFamily: "Fredoka One",
                  fontSize: "20px",
                  color: "#5c4033",
                }}
              >
                {year27.month}
              </div>
              <div className="col-md-3 col-xs-3 col-sm-3">
                <Link
                  href="/comingsoon"
                >
                  <a
                  title="salaf"
                  className="lead pt-3"
                  style={{
                    fontFamily: "Fredoka One",
                    fontSize: "20px",
                    color: "#2e856e",
                    textDecoration: "underline",
                  }}
                  target="_blank"
                  rel="noreferrer">Listen</a>
                </Link>
              </div>
              <div className="col-md-3 col-xs-3 col-sm-3">
                <a
                  href={year27.drive}
                  title="salaf"
                  className="lead pt-3"
                  style={{
                    fontFamily: "Fredoka One",
                    fontSize: "20px",
                    color: "#2e856e",
                    textDecoration: "underline",
                  }}
                  target="_blank"
                  rel="noreferrer"
                >
                  Download
                </a>
              </div>
              <div className="col-md-3 col-xs-3 col-sm-3">
                <Link
                  href="/comingsoon"
                >
                  <a
                  title="salaf"
                  className="lead pt-3 paddingVideo"
                  style={{
                    fontFamily: "Fredoka One",
                    fontSize: "20px",
                    color: "#2e856e",
                    textDecoration: "underline",
                  }}
                  target="_blank"
                  rel="noreferrer"></a>Watch
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
}
