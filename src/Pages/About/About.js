import React from "react";
import "./About.css";
import Dance from "../../assets/dance.jpeg";
const About = (props) => {
  return (
    <div className="aboutMain">
      <div className="container">
        <div className="pt-3rem">
          <h4 className="eventsTitle">Upcoming Events</h4>
          <p className="eventsTitle">
            Welcome to the circle,<br/> Lahe Lahe is your ever-welcoming, personal
            space that lets you be your ‘flawsome’ self in the comfort of
            personal expression. A non-judgmental, all-inclusive community where
            you can indulge in your passion, build meaningful connections and
            take life how it’s meant to be taken, slowly-slowly...
          </p>
          <div className="row">
            {[0, 1, 2, 3, 4].map((val, i) => {
              return (
                <div className="col-md-4 mt-4" key={i}>
                  <div className="cardDiv">
                    <p> Dance {i + 1}</p>
                    <p>Date : Apr 14</p>
                    <img src={Dance} />
                    <br />
                    <button className="mt-2 buttonBtn">View Event</button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-5">
            <br/>
            <br/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
