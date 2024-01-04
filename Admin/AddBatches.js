import React, { useState } from "react";
import axios from "axios";
const AddBatches = () => {
    const[id,setId]=useState();
    const[course,setCourse] = useState("");
    const[startdate,setStartdate] = useState("");
    const[timings,setTimings] = useState("");
    const[trainer,setTrainer] = useState("");
    const PostBatches = (batch)=>{
        batch.preventDefault();
        axios.post("http://localhost:4000/batches",{id,course,startdate,timings,trainer})
        .then(() => {
            alert("Data Added");
            setId("");
            setCourse("");
            setStartdate("");
            setTimings("");
            setTrainer("");
          })
          .catch((err) => {
            console.log(err);
          });
    }
  return (
    <div className="container p-5 text-center">
      <h1>Add Batches</h1>
      <div className="container p-5 text-center">
        <form onSubmit={PostBatches}>
              <input
                type="text"
                className="form-control m-2"
                name="course"
                placeholder="Course Name"
                value={course}
                onChange={(batch) => {
                  setCourse(batch.target.value);
                }}
              />
               <input
                type="text"
                className="form-control m-2"
                name="startdate"
                placeholder="Date"
                value={startdate}
                onChange={(batch) => {
                  setStartdate(batch.target.value);
                }}
              />
               <input
                type="text"
                className="form-control m-2"
                name="timings"
                placeholder="Timings"
                value={timings}
                onChange={(batch) => {
                  setTimings(batch.target.value);
                }}
              />
               <input
                type="text"
                className="form-control m-2"
                name="trainer"
                placeholder="Trainer"
                value={trainer}
                onChange={(batch) => {
                  setTrainer(batch.target.value);
                }}
              />
                <input type="submit" className="m-3"/>
            
        </form>
      </div>
    </div>
  );
};

export default AddBatches;
