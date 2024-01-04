import React from "react";
import image from "./cu-2.jpg";
const About = () => {
  return (
    <div className="container p-5">
      <h5> ABOUT </h5>
      <div className="row">
        <div className="col-12 col-lg-8">
          <p>
            Hyderabad IT Trainings is a Hyderabad based Training Institute
            delivering classroom and online trainings in India, USA and UK,
            Australia. We are Providing high quality training is our core value.
            We offer both classroom and online training on niche technologies
            which are in high demand. All our trainers are IT professionals with
            rich experience.
          </p>
          <p>
            Hyderabad IT Trainings is a Hyderabad based Training Institute
            delivering classroom and online trainings in India, USA and UK,
            Australia. We are Providing high quality training is our core value.
            We offer both classroom and online training on niche technologies
            which are in high demand. All our trainers are IT professionals with
            rich experience.
          </p>
          <p>
            Hyderabad IT Trainings is a Hyderabad based Training Institute
            delivering classroom and online trainings in India, USA and UK,
            Australia. We are Providing high quality training is our core value.
          </p>
        </div>
        <div className="col-12 col-lg-4 w-33">
          <img src={image} alt="" />
        </div>
      </div>
      <h5> Vision </h5>
      <p>
        Hyderabad IT Training Training Institutes in Hyderabad vision for
        quality managements to consistently deliver high-quality solutions
        focused on improving customer satisfaction. To be an Software Training
        Institutes in Hyderabad, in dynamic equilibrium with its social,
        ecological and economic environment striving continuously for excellence
        in education. Hyderabad IT Training is targeting to become one the
        biggest and globally renowned training and learning Solutions Company
        which helps students build a reputed IT career and also assist IT
        organization to build up their workforce with more practical oriented
        resources.
      </p>
    </div>
  );
};

export default About;
