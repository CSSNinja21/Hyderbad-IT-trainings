import axios from 'axios'
import React, { useEffect, useState } from 'react'
const ViewCourses = ()=>{
    const [courses,setCourses] = useState([]);
    const [id,setId] = useState("");
    const[course,setCourse]= useState("");
    const [skills,setSkills] = useState("");
    const [description,setDescription] = useState("");
    const[path,setPath]= useState("");
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
      const deleteData = (couId) => {
        axios
          .delete("http://localhost:4000/courses/" + couId)
          .then(() => {
            alert("Deleted ...");
          })
          .catch((err) => {
            console.log(err);
          });
        // alert("Working " + empId);
      };
      const editData = (couId) => {
        axios
          .get("http://localhost:4000/courses/" + couId)
          .then((res) => {
            setId(res.data.id);
            setCourse(res.data.course);
            setSkills(res.data.skills);
            setDescription(res.data.description);
            setPath(res.data.path);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      const updateData = (batch)=>{
        batch.preventDefault();
        axios.put("http://localhost:4000/courses/"+id,{id,course,skills,description,path})
        .then(()=>{
          alert("Data Updated ")
          setId("");
          setCourse("");
          setSkills("");
          setDescription("");
          setPath("");	
        })
        .catch((err)=>{
          console.log(err);
        })
      }
      
      return (
        <div className="container p-5">
      <h1>View courses</h1>
      <div className="table-responsive">
        <table className="table ">
          <thead>
            <tr>
              <th>ID</th>
              <th>course</th>
              <th>Skills</th>
              <th>Description</th>
              <th>Path</th>
              <th> Action </th>
            </tr>
          </thead>
          <tbody>
            {courses.map((cou) => {
              return (
                <tr>
                  <td>{cou.id}</td> 
                  <td>{cou.course}</td>
                  <td>{cou.skills}</td>
                  <td>{cou.description}</td>
                  <td> {cou.path} </td>
                  <td>
                    <button
                      onClick={() => {
                        deleteData(cou.id);
                      }}
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => {
                        editData(cou.id);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        <form onSubmit={updateData}>
          <input
            type="number"
            name="id"
            placeholder="Course Id"
            value={id}
            disabled
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
            placeholder="course Name"
          />
          <input
            type="text"
            name="skills"
            value={skills}
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
            placeholder="Description"
          />
          <input
            type="text"
            name="path"
            value={path}
            onChange={(cou) => {
              setPath(cou.target.value);
            }}
            placeholder="path"
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
        
      
}



export default ViewCourses