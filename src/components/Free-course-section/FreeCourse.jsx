import React from "react";
import { Container, Row, Col } from "reactstrap";

import donorImg1 from "../../assests/images/donor5.jpg";
import donorImg4 from "../../assests/images/donor1.jpg";
import donorImg2 from "../../assests/images/donor4.jpg";
import donorImg3 from "../../assests/images/donor3.jpg";
import FreeCourseCard from "./FreeCourseCard";

import "./free-course.css";

const freeCourseData = [
  {
    id: "01",
    title: "Abebe kebede",
    imgUrl: donorImg1 ,
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "02",
    title: "Kebede Abebe",
    imgUrl: donorImg2 ,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "03",
    title: "Lakew Yisfa",
    imgUrl: donorImg3 ,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "04",
    title: "Yisfa Lakew",
    imgUrl: donorImg4 ,
    students: 5.3,
    rating: 1.7,
  },
];

const FreeCourse = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="fw-bold">Donor of the Week</h2>
          </Col>

          {freeCourseData.map((item) => (
            <Col lg="3" md="4" className="mb-4" key={item.id}>
              <FreeCourseCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FreeCourse;
