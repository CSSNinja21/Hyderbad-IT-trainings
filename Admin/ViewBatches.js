import React, { useEffect, useState } from "react";
import axios from "axios";
const ViewBatches = () => {
  const [batches, setBatches] = useState([]);
  const [id,setId]=useState();
  const [course,setCourse] = useState("");
  const[startdate,setStartdate] = useState("");
  const [timings,setTimings]= useState("");
  const [trainer,setTrainer]=useState("");
  useEffect(() => {
    axios
      .get("http://localhost:4000/batches")
      .then((res) => {
        setBatches(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const deleteBatch = (batchId) => {
    axios
      .delete("http://localhost:4000/batches/" + batchId)
      .then(() => {
        alert("batch deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const editData = (batchId) => {
    axios
      .get("http://localhost:4000/batches/" + batchId)
      .then((res) => {
        setId(res.data.id);
        setCourse(res.data.course);
        setStartdate(res.data.startdate);
        setTimings(res.data.timings);
	      setTrainer(res.data.trainer);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const updateData = (batch)=>{
    batch.preventDefault();
    axios.put("http://localhost:4000/batches/"+id,{id,course,startdate,timings,trainer})
    .then(()=>{
      alert("Data Updated ")
      setId("");
      setCourse("");
      setStartdate("");
      setTimings("");
      setTrainer("");	
    })
    .catch((err)=>{
      console.log(err);
    })
  };
  
  return (
    <div className="container p-5 text-center">
      <h1> View Batches</h1>
    <div className="container p-5">
      <div className="table-responsive">
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th>Course</th>
              <th>Date</th>
              <th>Timings</th>
              <th>Trainer</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {batches.map((batch) => {
              return (
                <tr>
                  <td>{batch.course}</td>
                  <td>{batch.startdate}</td>
                  <td>{batch.timings}</td>
                  <td>{batch.trainer}</td>
                  <td>
                    <button
                      className=" me-1" 
                      onClick={() => {
                        editData(batch.id);
                      }}
                    >
                      Edit
                      
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        deleteBatch(batch.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
    <div>
        <form onSubmit={updateData}>
          <input
            type="number"
            name="id"
            placeholder="Batch Id"
            value={id}
            disabled
            onChange={(batch) => {
              setId(batch.target.value);
            }}
          />
          <input
            type="text"
            name="course"
            value={course}
            onChange={(batch) => {
              setCourse(batch.target.value);
            }}
            placeholder="Course Name"
          />
          <input
            type="text"
            name="startdate"
            value={startdate}
            onChange={(batch) => {
              setStartdate(batch.target.value);
            }}
            placeholder="Date"
          />
          <input
            type="text"
            name="timings"
            value={timings}
            onChange={(batch) => {
              setTimings(batch.target.value);
            }}
            placeholder="Timings"
          />
          <input
            type="text"
            name="trainer"
            value={trainer}
            onChange={(batch) => {
              setTrainer(batch.target.value);
            }}
            placeholder="Trainer"
          />
          <input type="submit" />
        </form>
      </div>
    
    </div>
  );
};

export default ViewBatches;
