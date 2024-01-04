import React from 'react';
import slide1 from './DESK1-min.jpg';
import slide2 from './desk2-min.jpg';
import slide3 from './desk3-min.jpg';

const Slidee = () => {
  return (
    <div className='container-fluid p-0'>
        <div id="carouselId" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <li data-bs-target="#carouselId" data-bs-slide-to="0" class="active" aria-current="true" aria-label="First slide"></li>
                <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
                <li data-bs-target="#carouselId" data-bs-slide-to="2" aria-label="Third slide"></li>
            </div>
            <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                    <img src={slide1} class="w-100 d-block" alt="First slide"/>
                </div>
                <div class="carousel-item">
                    <img src={slide2} class="w-100 d-block" alt="Second slide"/>
                </div>
                <div class="carousel-item">
                    <img src={slide3} class="w-100 d-block" alt="Third slide"/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <br/>
        <div className="container">
    <h1 className='text-center'>Recent Placements </h1>
    <div className="row">
      <div className="col-12 col-md-3 p-3">
        <img src="https://hyderabadittrainings.com/images/placement/hydIT%20PLACEMENT%20OPEN-min.jpg" class="w-100 mt-3"
          alt="" />
      </div>
      <div className="col-12 col-md-3 p-3">
        <img src="https://hyderabadittrainings.com/images/placement/hydIT%20PLACEMENT%20OPEN-min.jpg" class="w-100 mt-3"
          alt="" />
      </div>
      <div className="col-12 col-md-3 p-3">
        <img src="https://hyderabadittrainings.com/images/placement/hydIT%20PLACEMENT%20OPEN-min.jpg" class="w-100 mt-3"
          alt="" />
      </div>
      <div className="col-12 col-md-3 p-3">
        <img src="https://hyderabadittrainings.com/images/placement/hydIT%20PLACEMENT%20OPEN-min.jpg" class="w-100 mt-3"
          alt="" />
      </div>
    </div>
  </div>
    </div>
    
  )
}

export default Slidee