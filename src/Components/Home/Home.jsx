// Home.jsx

import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  const hackathon = [
    {
      name: "Hackathon1",
      theme: "Theme1",
      description: "Lorem1 epsum1 dolor1 sit1 amut1 abrev1",
    },
    // ,
    // {
    //   name: "Hackathon2",
    //   theme: "Theme2",
    //   description: "Lorem2 epsum2 dolor2 sit2 amut2 abrev3",
    // },
    // {
    //   name: "Hackathon3",
    //   theme: "Theme3",
    //   description: "Lorem3 epsum3 dolor3 sit3 amut3 abrev3",
    // },
  ];
  return (
    <>
      <section className="hero">
        <div className="header">
          <div className="title-content">
            <h1 className="title">TechnOcean</h1>
            <h3 className="subtitle">Empowering Innovators</h3>
          </div>
          <p>
            A space where creativity sparks, collaboration blooms, and
            innovation flourishes.
          </p>
          <p>
            Three days of workshops at &nbsp;
            <a
              href="http://www.lpu.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              LPU
            </a>
            , tech demos, hackathons, and keynotes.
          </p>
          <aside className="sidebar">
            <div className="event-box">
              <div className="event-info">
                <p>
                  <strong>From:</strong> March 10-12, 2024
                </p>
                <p>
                  <strong>Venue:</strong> LPU, Punjab
                </p>
              </div>
            </div>
            <button className="call-to-action">Join Now</button>
          </aside>
          <div className="hot-links">
            <div className="rules">
              <span>Rules</span>
              <li>
                Follow the <Link to="/codeofconduct">Code of Conduct</Link>.
              </li>
            </div>
            {hackathon.map((hackathon) => (
              <div className="hackathon">
                <div className="hackathon-title">{hackathon.name}</div>
                <div className="hackathon-theme">{hackathon.theme}</div>
                <div className="hackathon-registration"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
