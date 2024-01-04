import axios from "axios";
import React, { useState } from "react";
const AddCourses = () => {
  const [id, setId] = useState("");
  const [course, setCourse] = useState("");
  const [Skills, setSkills] = useState("");
  const [description, setDescription] = useState("");
  const [path, setPath] = useState("");
  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    const imageAddress = URL.createObjectURL(selectedImage);
    setPath(imageAddress);
  }
  const postCourses = (cou) => {
    cou.preventDefault();
    axios
      .post("http://localhost:4000/coures", {
        id,
        course,
        Skills,
        description,
        path,
      })
      .then(() => {
        alert("Data Added");
        setId("");
        setCourse("");
        setSkills("");
        setDescription("");
        setPath("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container p-5">
      <h1>Add Courses</h1>
      <form onSubmit={postCourses}>
        <input
          type="text"
          name="id"
          placeholder="Course Id"
          value={id}
          onChange={(cou) => {
            setId(cou.target.value);
          }}
        />
        <input
          type="text"
          name="course"
          value={course}
          onChange={(cou) => {
            setCourse(cou.target.value);
          }}
          placeholder="Course Name"
        />
        <input
          type="text"
          name="skills"
          value={Skills}
          onChange={(cou) => {
            setSkills(cou.target.value);
          }}
          placeholder="Skills"
        />
        <input
          type="text"
          name="description"
          value={description}
          onChange={(cou) => {
            setDescription(cou.target.value);
          }}
          placeholder="Course Description"
        />
         <input type="file" onChange={handleImageChange} />
           {path && <img src={path} alt="Selected Image" />}
        <input
            src=""
            alt=""
          name="path"
          value={path}
          onChange={(cou) => {
            setPath(cou.target.value);
          }}
          placeholder="Path"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddCourses;
