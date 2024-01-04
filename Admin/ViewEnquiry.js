import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewEnquiry = () => {
    const [Enquries,setEnquries] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:4000/enquries")
        .then((res)=>{
            setEnquries(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    })
  return (
    <div className='container p-5 text-center'>
        <h1> View Enquiry</h1>
    <div className='container p-5'>
        <div class="table-responsive" >
            <table class="table table-bordered text-center" >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                         <th>Mobile</th>
                         <th>Course</th>
                         <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                 {Enquries.map ((enq)=>{
                    return(
                        <tr>
                            <td>{enq.id}</td>
                            <td>{enq.name}</td>
                            <td>{enq.email}</td>
                            <td>{enq.mobile}</td>
                            <td>{enq.course}</td>
                            <td>{enq.message}</td>
                        </tr>
                    )
                 })}
                </tbody>
            </table>
        </div>
        

    </div>
    </div>
  )
}

export default ViewEnquiry;