import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section style={{ backgroundColor: "#B3E5FC"}}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src="./communityHelp.gif" alt="" className="w-100" height="400px" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>Services</h2>
              <p>
              Our platform makes it simple to share your fundraiser in a variety 
              of ways to bring in donations, track your progress, and post updates
               to engage both local and international community.
              </p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={25} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Completed Projects</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={12} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Patient Around World</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={95} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Ideas Raised Funds</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={5} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Categories Served</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
