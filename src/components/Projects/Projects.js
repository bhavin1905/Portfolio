import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/lll.jpg";
import chatify from "../../Assets/Projects/twitt.jpg";
import suicide from "../../Assets/Projects/trip.jpg";
import bitsOfCode from "../../Assets/Projects/output.jpg";
import whrrl from "../../Assets/Projects/logo2.png"
import house from "../../Assets/Projects/house.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="AI Stock Analyzer & Recommendation System"
              description="Built an AI-powered stock analysis agent using Python and Crewai. The system allows users to input a stock name and receive a comprehensive report, including real-time data, fundamental analysis, and actionable recommendations. It determines whether to buy, sell, or hold based on current market trends and valuation metrics."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Twitter Sentiment AI for Memecoins"
              description="Developed an AI agent leveraging Python, Crewai, and Microsoft Autogen to analyze memecoins' market sentiment using live tweets. The agent scrapes recent tweets, performs sentiment analysis, and generates investment recommendations—buy, sell, or hold—based on market buzz and community insights."
              // ghLink="#"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Smart AI Trip Planner"
              description="Designed an intelligent trip planning agent with Crewai. Users provide preferences like budget, travel dates, and interests, and the system calculates an optimized itinerary, suggesting the best destinations, estimated costs, and travel schedules. It streamlines planning for hassle-free vacations."
              // ghLink="#"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={whrrl}
              isBlog={false}
              title="Whrrl Partner App Migration"
              description="Successfully migrated the Whrrl Partner App from the Ionic framework to React Native within 2 months. This migration enhanced app performance, provided a smoother UI/UX experience, and reduced platform-specific limitations while maintaining feature parity."
              // ghLink="#"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={house}
              isBlog={false}
              title="House Price Prediction with Machine Learning"
              description="Created a machine learning model to predict house prices using supervised learning algorithms. The model analyzes historical data such as location, property size, and market trends to provide accurate price estimations, aiding buyers and sellers in decision-making."
              // ghLink="#"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Stock Price Prediction Using LSTM"
              description="Implemented a deep learning-based stock price prediction model using LSTM. The model processes historical stock data and predicts prices in 5-minute intervals, achieving an accuracy of approximately 75%. It’s designed for real-time trading decision support."
              // ghLink="#"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
