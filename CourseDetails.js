import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:4000/courses/" + id)
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div className="container p-5 ">
      <h1 className="text-center">CourseDetails</h1>
      <h1> {details.course} </h1>
      <p> Skills : {details.skills} </p>
      <p> Description : {details.description} </p>
    </div>
  );
};

export default CourseDetails;
