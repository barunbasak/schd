import React from "react";

import "./reset.css";
import "./schd.css";

class Event extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let pX = this.props.n * 126; //-1;
    let pY = 126;
    return (
      <React.Fragment>
        <li
          class="single-event"
          data-content="event-restorative-yoga"
          data-event="event-1"
          style={{ top: pX + "px", height: pY + "px" }}
        >
          <a href="#0">
            <span class="event-date">09:00 - 10:00</span>
            <em class="event-name">Restorative Yoga</em>
          </a>
        </li>
      </React.Fragment>
    );
  }
}

export class Schd extends React.Component {
  render() {
    return (
      <div class="cd-schedule">
        <div class="timeline">
          <ul>
            <li>
              <span>09:00</span>
            </li>
            <li>
              <span>09:30</span>
            </li>
            <li>
              <span>10:00</span>
            </li>
            <li>
              <span>10:30</span>
            </li>
            <li>
              <span>11:00</span>
            </li>
            <li>
              <span>11:30</span>
            </li>
            <li>
              <span>12:00</span>
            </li>
            <li>
              <span>12:30</span>
            </li>
            <li>
              <span>13:00</span>
            </li>
            <li>
              <span>13:30</span>
            </li>
            <li>
              <span>14:00</span>
            </li>
            <li>
              <span>14:30</span>
            </li>
            <li>
              <span>15:00</span>
            </li>
            <li>
              <span>15:30</span>
            </li>
            <li>
              <span>16:00</span>
            </li>
            <li>
              <span>16:30</span>
            </li>
            <li>
              <span>17:00</span>
            </li>
            <li>
              <span>17:30</span>
            </li>
            <li>
              <span>18:00</span>
            </li>
          </ul>
        </div>

        <div class="events">
          <ul>
            <li class="events-group">
              <div class="top-info">
                <span>Monday</span>
              </div>

              <ul>
                <Event n={1} />
                <Event n={6} />
              </ul>
            </li>

            <li class="events-group">
              <div class="top-info">
                <span>Tuesday</span>
              </div>

              <ul>
                <Event />
              </ul>
            </li>

            <li class="events-group">
              <div class="top-info">
                <span>Wednesday</span>
              </div>

              <ul>
                <Event />
              </ul>
            </li>

            <li class="events-group">
              <div class="top-info">
                <span>Thursday</span>
              </div>

              <ul>
                <Event />
              </ul>
            </li>

            <li class="events-group">
              <div class="top-info">
                <span>Friday</span>
              </div>

              <ul>
                <Event />
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
