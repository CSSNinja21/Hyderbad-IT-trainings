import React, { useState } from 'react'
import ViewBatches from './ViewBatches'
import ViewEnquiry from './ViewEnquiry'
import AddBatches from './AddBatches'
import ViewCourses from './ViewCourses'
import AddCourses from './AddCourses'

const HrDashboard = () => {
  const [view,setView] = useState("")
 const DashboardView = () =>{
  if (view === "") {
    return <h1 className='text-center'>Welcome to Admin DashBoard</h1>
  } else if (view === "addBatches") {
    return <AddBatches/>
  } else if (view === "viewBatches") {
    return <ViewBatches/>
  } else if (view === "viewEnquiries") {
    return <ViewEnquiry/>
  } else if (view === "viewcourses" ) {
    return <ViewCourses/>
} else if (view === "addcourses"){
  return <AddCourses/>
}else {
    return <h1 className='text-center'>Welcome to Admin</h1>
  }
  }
  return (
    <div className='container p-5 me-1'>
      <div className='row'>
      <div className='col-12 col-lg-2 'id="side">
        <button onClick={()=>{setView("addBatches")}}>Add Batches</button>
        <button onClick={()=>{setView("viewBatches")}}>View Batches</button>
        <button onClick={()=>{setView("addcourses")}}>Add Courses</button>
        <button onClick={()=>{setView("viewcourses")}}>View Courses</button>
        <button onClick={()=>{setView("viewEnquiries")}}>View Enquires</button>
      </div>
      <div className='col-12 col-lg-10 '>
       {DashboardView()}
      </div>
      </div>
    </div>
  )
}

export default HrDashboard;