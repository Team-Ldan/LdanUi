import React from "react";
import { Container, Row, Col } from "reactstrap";
import patientImg1 from "../../assests/images/patient1.jpg"
import patientImg2 from "../../assests/images/patient2.jpg"
import patientImg4 from "../../assests/images/patient4.webp"
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Jhon Doe",
    lesson: 200000,
    students: 12.5,
    rating: 187.5,
    imgUrl: patientImg1,
  },

  {
    id: "02",
    title: "Doe Jhon",
    lesson: 20000,
    students: 12.5,
    rating: 18.75,
    imgUrl: patientImg2,
  },

  {
    id: "03",
    title: "Jae Doe",
    lesson: 200000,
    students: 12.5,
    rating: 187.5,
    imgUrl: patientImg4,
  },
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Patients with Urgent Cases</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  consequatur libero quod voluptatibus ullam quia quas, vitae
                  voluptatem recusandae reprehenderit!
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
