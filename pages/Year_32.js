import React, { Component } from "react";
import Link from "next/link";

export default class Year_32 extends Component {
  render() {
    return this.props.year1432.map((year32) => {
      return (
        <div
          id="collapseSix"
          className="accordion-collapse collapse "
          aria-labelledby="headingSix"
          data-bs-parent="#accordionExample"
          key={year32.year}
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
                {year32.month}
              </div>
              <div className="col-md-4 col-xs-4 col-sm-4">
                <Link
                  href="/comingsoon"
                >
                  <a
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
              <div className="col-md-4 col-xs-4 col-sm-4">
                <a
                  href={year32.drive}
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
            </div>
          </div>
        </div>
      );
    });
  }
}
