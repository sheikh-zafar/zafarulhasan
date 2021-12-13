import React, { Component } from "react";

export default class Year_31 extends Component {
  render() {
    return this.props.year1431.map((year31) => {
      return (
        <div
          id="collapseFive"
          className="accordion-collapse collapse"
          aria-labelledby="headingFive"
          data-bs-parent="#accordionExample"
          key={year31.year}
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
                {year31.month}
              </div>
              <div className="col-md-4 col-xs-4 col-sm-4">
                <a
                  href={year31.archive}
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
                  href={year31.drive}
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
