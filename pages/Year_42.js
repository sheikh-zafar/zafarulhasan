import React, { Component } from "react";

export default class Year_42 extends Component {
  render() {
    return this.props.year1442.map((year42) => {
      return (
        <div
          id="collapseSixteen"
          className="accordion-collapse collapse"
          aria-labelledby="headingSixteen"
          data-bs-parent="#accordionExample"
          key={year42.year}
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
                {year42.month}
              </div>
              <div className="col-md-4 col-xs-4 col-sm-4">
                <a
                  href={year42.archive}
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
                  Listen
                </a>
              </div>
              <div className="col-md-4 col-xs-4 col-sm-4">
                <a
                  href={year42.drive}
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
