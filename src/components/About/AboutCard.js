import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bhavin Parmar </span> 
            from <span className="purple">India.</span>
            <br />
            I am a passionate AI and React Native developer with a strong background in 
            <span className="purple"> Machine Learning</span>, 
            <span className="purple"> Mobile App Development</span>, and 
            <span className="purple"> Artificial Intelligence.</span>
            <br />
            Over the years, I have worked on building intelligent AI agents and robust machine learning models, 
            along with creating seamless mobile applications.
            <br />
            <br />
            Apart from coding, here are some other activities I love:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Coin collection from different countries
            </li>
            <li className="about-activity">
              <ImPointRight /> Currency collection
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to combine technology and creativity to build impactful solutions!"{" "}
          </p>
          <footer className="blockquote-footer">Bhavin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
