import React from 'react'
import { Route,  Routes } from 'react-router-dom'
import About from './About';
import Courses from './Courses';
import Slidee from './Slidee';
import { Batches } from './Batches';
import Contact from './Contact';
import ErrorPage from './ErrorPage';
import HrLogin from './Admin/HrLogin';
import HrDashboard from './Admin/HrDashboard';
import CourseDetails from './CourseDetails';


const Routing = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element= {<Slidee/>} ></Route>   
        <Route path='/about' element={<About/>}></Route>
        <Route path='/courses' element ={<Courses/>}></Route> 
        <Route path='/courseDetails/:id' element = {<CourseDetails/>} />
        <Route path='/batches' element ={<Batches/>}></Route>
        <Route path='/contact' element ={<Contact/>}></Route>
        <Route path='*' element ={<ErrorPage/>}></Route>
        <Route path='/hrlogin' element={<HrLogin/>}></Route>
        <Route path='/hrdashboardqwerty' element={<HrDashboard/>}></Route>
        </Routes>
    </div>
  )
}

export default Routing