import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Courses = () => {
  const [Courses, setCourses] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/courses")
      .then((res) => {
        setCourses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div className="text-center container p-5">
      <h1>Our Courses</h1>
      <div className="row">
      {Courses.map((course) => {
        return (
            <div className="col-10 col-md-6 col-lg-4 p-5 mx-auto">
                <div class="card">
                    <img class="card-img-top" src= {course.path} alt="Title" />
                    <div class="card-body">
                        <h4 class="card-title"> {course.course} </h4>
                        <NavLink to={`/courseDetails/${course.id}`}>
                        <button className="w-100 btn btn-danger"> Know More</button>
                        </NavLink>
                    </div>
                </div>
                
            </div>


        );
      })}
      </div>
    </div>
  );
};

export default Courses;
