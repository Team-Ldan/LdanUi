import { Card } from "@mantine/core";
import React from "react";

const CourseCard = (props) => {
  const { imgUrl, title, lesson, students, rating } = props.item;

  return (
    <Card shadow="xl" radius="lg" withBorder>
    <div className="single__course__item">
      <div className="course__img">
        <img src={imgUrl} alt="" className="w-100" height="300px" />
      </div>

      <div className="course__details">
        <h6 className="course__title mb-4">{title}</h6>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="lesson d-flex align-items-center gap-1">
            <i class="ri-book-open-line"></i> {lesson} Birr
          </p>

          <p className="students d-flex align-items-center gap-1">
          <i class="ri-star-fill"></i> {students}K so far
          </p>
        </div>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="rating d-flex align-items-center gap-1">
            <i class="ri-star-fill"></i> {rating}K left
          </p>

          <p className="enroll d-flex align-items-center gap-1">
            <a href="#" style={{ fontWeight: "800", color: "red"}}> Donate Now</a>
          </p>
        </div>
      </div>
    </div>
    </Card>
  );
};

export default CourseCard;
