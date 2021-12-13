import React, { Component } from "react";
import Footer from "./footer";
import Navbar from "./nav";

export default class schedule extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section className="embed-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12">
                <h2 className="aboutheader">Lecture Schedule</h2>
                <hr />
              </div>
            </div>
          </div>
        </section>
        <div className="container about">
          Lectures of Sheikh Zafarulhasan حفظه الله are held on daily basis and
          it is brodcasted on youtube, mixlr and on zoom by the permission of
          الله عز و جل. Kindly take a note of his schedule and add the schedule
          to your google calendar.
        </div>
        <section className="embed-section">
          <div className="container">
            <table className="table table-dark">
              <thead>
                <tr>
                  <th scope="col">
                    {" "}
                    <i className="fa fa-calendar-o" aria-hidden="true"></i> Day
                  </th>
                  <th scope="col">
                    {" "}
                    <i className="fa fa-sticky-note-o" aria-hidden="true"></i>{" "}
                    Lecture name
                  </th>
                  <th scope="col">
                    {" "}
                    <i className="fa fa-clock-o" aria-hidden="true"></i> Timing
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Sunday</th>
                  <td>Sharh as sunnah<hr/>Fiqh 2 Buniyadi Uloom</td>
                  <td>After Isha<hr/>After Sharh as sunnah</td>
                </tr>
                <tr>
                  <th scope="row">Monday</th>
                  <td>Bulugh al maram (Kalemah)</td>
                  <td>After Isha</td>
                </tr>
                <tr>
                  <th scope="row">Tuesday</th>
                  <td>Tafseer Surah Al-Baqarah</td>
                  <td>After Isha</td>
                </tr>
                <tr>
                  <th scope="row">Wednesday</th>
                  <td>Bulugh al maram (main)</td>
                  <td>After Isha</td>
                </tr>
                <tr>
                  <th scope="row">Thursday</th>
                  <td>Rahe Hidayat </td>
                  <td>After Isha</td>
                </tr>

                <tr>
                  <th scope="row">Friday</th>
                  <td>Jumu&apos;ah Khutbah</td>
                  <td>Jumu&apos;ah</td>
                </tr>

                <tr>
                  <th scope="row">Saturday</th>
                  <td>Shamail al muhammadiyah</td>
                  <td>After Isha</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-center about">
            Add Schedule to your calendar&nbsp;&nbsp;
            <a
              href="https://accounts.google.com/ServiceLogin?service=cl&passive=1209600&osid=1&continue=https://calendar.google.com/calendar/u/0/r/month?tab%3Dwc%26pli%3D1&followup=https://calendar.google.com/calendar/u/0/r/month?tab%3Dwc%26pli%3D1&scc=1"
              role="button"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lg btn-outline-dark Social-link-btn"
              style={{ backgroundColor: "beige", color: "#5c4033" }}
            >
              <i className="fa fa-calendar" aria-hidden="true"></i> Calendar
            </a>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}
