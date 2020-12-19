import React from "react";
import { FcBearish, FcCommandLine, FcCalendar } from "react-icons/fc";
import { Container, Row, Col } from "reactstrap";

import NavBar from "../components/navbar";
import Header from "../components/header";
import Businesses from "../components/businesses";

import "../css/HomePage.css";

function HomePage() {
  return (
    <Container fluid={true} className="container-fluid">
      <Row>
        <Col>
          <NavBar />
        </Col>
      </Row>
      <Row className="header__bg">
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="content1__content">
            <FcBearish size={62} />
            <h4>Affordable & Low-Cost</h4>
            <p>
              Reasonably priced courses and career guidance at less than 1/10th
              of the average bootcamp
            </p>
          </div>
        </Col>
        <Col>
          <div className="content2__content">
            <FcCommandLine size={62} />
            <h4>Real World Experience</h4>
            <p>
              Graduate with a diverse portfolio. Along with your own projects,
              you'll work with companies to gain valuable real-world experience
            </p>
          </div>
        </Col>
        <Col>
          <div className="content3__content">
            <FcCalendar size={62} />
            <h4>Schedule Flexibility</h4>
            <p>
              Fully online and part-time courses available with weekly workshops
              to adapt to any schedule
            </p>
          </div>
        </Col>
      </Row>
      <Row className="businesses__section">
        <Col>
          <Businesses />
        </Col>
      </Row>
      <Row>
        <Col>
          <div></div>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
