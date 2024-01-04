import axios from "axios";
import React, { useState } from "react";

const Contact = () => {
  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile,setMobile] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");
  const postEnquiry = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/enquries", {
        id,
        name,
        email,
        mobile,
        course,
        message,
      })
      .then(() => {
        alert("Enquiry Submitted");
        setId()
        setName("")
        setEmail("")
        setCourse("")
        setMobile("")
        setCourse("")
        setMessage("")
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container p-5 text-center">
      <form onSubmit={postEnquiry}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="form-control"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="form-control"
          value={email}
          onChange={(e) => {
            setEmail (e.target.value);
          }}
        />
        <input
          type="text"
          name="mobile"
          placeholder="Moblie Number"
          className="form-control"
          value={mobile}
          onChange={(e) => {
            setMobile(e.target.value);
          }}
        />
        <select
          className="form-select"
          name="course"
          value={course}
          onChange={(e) => {
            setCourse (e.target.value);
          }}
        >
          <option value="" hidden>
             Courses
          </option>
          <option value="UI Development ">UI Development</option>
          <option value="python ">Python Full stack</option>
          <option value="UX">Ux Designing</option>
          <option value="Java">Java </option>
        </select>
        <textarea
          rows={7}
          cols={30}
          name="message"
          placeholder="Message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          className="form-control"
        />
        <input type="submit" className="btn btn-warning px-3" />
      </form>
    </div>
  );
};

export default Contact;
