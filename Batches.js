import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Batches = () => {
    const[batches,setBatches]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:4000/batches")
        .then((res)=>{
            setBatches(res.data)
        })
        .catch(
            (err)=>{
                console.log(err);
            }
        )
        
    })
  return (
    <div className='container p-5'>
        <div
            className="table-responsive"
        >
            <table
                className="table table-bordered text-center"
            >
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Date</th>
                        <th>Timings</th>
                        <th>Trainer</th>  
                        <th>Register For Demo</th>
                    </tr>
                </thead>
                <tbody>
                  {batches.map((batch)=>{
                    return <tr>
                        <td>{batch.course}</td>
                        <td>{batch.startdate}</td>
                        <td>{batch.timings}</td>
                        <td>{batch.trainer}</td>
                        <td><button className='text-danger bg-dark'>Enroll Now</button></td>
                    </tr>
                  })}
                </tbody>
            </table>
        </div>
        

    </div>
  )
}
