import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, I’m <b className="purple">Bhavin Parmar</b>, a passionate{" "}
              <b className="purple">AI and React Native Developer</b> with a strong background in{" "}
              <b className="purple">
                Artificial Intelligence, Machine Learning, and Mobile Application Development
              </b>.
              <br />
              <br />
              Over the years, I have honed my expertise in creating{" "}
              <b className="purple">intelligent AI agents</b>, building robust{" "}
              <b className="purple">machine learning models</b>, and performing{" "}
              <b className="purple">data analysis</b> and{" "}
              <b className="purple">exploratory data analysis (EDA)</b> to derive actionable insights.
              <br />
              <br />
              In the realm of mobile development, I specialize in designing and developing{" "}
              <b className="purple">React Native applications</b> that deliver seamless user
              experiences. My work often bridges the gap between cutting-edge{" "}
              <b className="purple">AI technologies</b> and practical real-world applications.
              <br />
              <br />
              <b>Key Strengths:</b>
              <ul>
                <li>
                  <b className="purple">AI Development:</b> Proficient in building AI agents and
                  implementing advanced machine learning algorithms.
                </li>
                <li>
                  <b className="purple">Data Expertise:</b> Skilled in EDA, data visualization, and
                  deriving actionable insights from complex data.
                </li>
                <li>
                  <b className="purple">React Native:</b> Experienced in developing scalable,
                  intuitive, and performance-driven mobile applications.
                </li>
                <li>
                  <b className="purple">Generative AI:</b> Knowledgeable in leveraging Generative AI
                  technologies to craft intelligent solutions.
                </li>
              </ul>
              My passion lies in combining the power of <b className="purple">data</b> and{" "}
              <b className="purple">technology</b> to build impactful, user-focused products. Let's
              connect and create something amazing! 🚀
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/bhavin1905"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/bhavin190503"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/bhavin-parmar-7a9237219/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/er.bhavin_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
