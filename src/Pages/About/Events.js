import React from "react";
import "./About.css";
import Dance from "../../assets/dance.jpeg";
const Events = (props) => {
  return (
    <div className="aboutMain">
      <div className="container">
        <div>
          <h4 className="text-center upComing">Events details</h4>
          <div className="row mt-5">
            <div className="col-md-6">
              <h4 className="eventName">
                Open-level Belly fusion Choreography workshop
              </h4>
              <h5 className="eventAutor mt-2">by Aastha Gulati</h5>
              <h5 className="eventAutor mt-2">22nd and 23rd January</h5>
              <h5 className="eventAutor mmt-2">4:15PM - 6:00PM</h5>
              <h6 className="eventAutor mt-2">At Dhurii and Online on Zoom</h6>
              <p className="eventText mt-4">
                We will be learning two choreographies of different moods - one
                will focus on serpentine movement juxtaposed with pauses, stops
                and pops while the other will focus more on layerings and turns.
              </p>
            </div>
            <div className="col-md-6">
              <img
                className="eventsImg"
                src="https://d33wubrfki0l68.cloudfront.net/79244bb916e330a1d7a7ec31fcdbf9ab7348dc68/d189d/img/jan22/belly-fusion-workshop.jpeg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
