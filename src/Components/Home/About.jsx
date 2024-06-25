import React from 'react';

export const About = () => {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: '500px' }}>
              <div className="position-relative h-100">
                <img 
                  className="position-absolute w-100 h-100 rounded" 
                  src="src\assets\Greatedane.jpg" 
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="border-start border-5 border-primary ps-5 mb-5">
                <h6 className="text-primary text-uppercase">About Us</h6>
                <h1 className="display-5 text-uppercase mb-0">We Keep Your Pets Happy All Time</h1>
              </div>
              <h4 className="text-body mb-4">Celebrating every tail wag with quality care and products, ensuring your pets' happiness at Pet World, your ultimate dog haven.</h4>
              <div className="bg-light p-4">
                <ul className="nav nav-pills justify-content-between mb-3" id="pills-tab" role="tablist">
                  <li className="nav-item w-50" role="presentation">
                    <button 
                      className="nav-link text-uppercase w-100 active" 
                      id="pills-1-tab" 
                      data-bs-toggle="pill"
                      data-bs-target="#pills-1" 
                      type="button" 
                      role="tab" 
                      aria-controls="pills-1"
                      aria-selected="true"
                    >
                      Our Mission
                    </button>
                  </li>
                  <li className="nav-item w-50" role="presentation">
                    <button 
                      className="nav-link text-uppercase w-100" 
                      id="pills-2-tab" 
                      data-bs-toggle="pill"
                      data-bs-target="#pills-2" 
                      type="button" 
                      role="tab" 
                      aria-controls="pills-2"
                      aria-selected="false"
                    >
                      Our Vision
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div 
                    className="tab-pane fade show active" 
                    id="pills-1" 
                    role="tabpanel" 
                    aria-labelledby="pills-1-tab"
                  >
                    <p className="mb-0">
                    At Pet World, our mission is to enrich the lives of dogs and their owners through a commitment to quality products, personalized services, and expert care. We strive to create a nurturing environment where every dog receives the highest standard of nutrition, grooming, and companionship, ensuring their well-being and happiness.</p>
                  </div>
                  <div 
                    className="tab-pane fade" 
                    id="pills-2" 
                    role="tabpanel" 
                    aria-labelledby="pills-2-tab"
                  >
                    <p className="mb-0">
                    Our vision at Pet World is to lead the industry as the ultimate destination for dog enthusiasts, offering unparalleled expertise, innovative products, and memorable experiences. We envision a future where every dog owner feels empowered and supported in providing the best life for their beloved pets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
