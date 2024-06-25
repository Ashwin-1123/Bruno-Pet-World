import React from 'react'
import './CSS/Hero.css'
import '@fortawesome/fontawesome-free/css/all.css';  // FontAwesome CSS import

export const Services = () => {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="border-start border-5 border-primary ps-5 mb-5" style={{ maxWidth: '600px' }}>
            <h6 className=" text-uppercase Read-tag Read-tag">Services</h6>
            <h1 className="display-5 text-uppercase mb-0">Our Excellent Pet Care Services</h1>
          </div>
          <div className="row g-5">
            <div className="col-md-6">
              <div className="service-item bg-light d-flex p-4">
                <i className="flaticon-house display-1 text-primary me-4"></i>
                <div>
                  <h5 className="text-uppercase mb-3">Pet Boarding</h5>
                  <p>Secure and comfortable lodging ensuring your pet's safety and happiness while you're away.</p>
                  <a className=" text-uppercase Read-tag Read-tag" href="/Service">Read More<i className="bi bi-chevron-right"></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item bg-light d-flex p-4">
                <i className="flaticon-food display-1 text-primary me-4"></i>
                <div>
                  <h5 className="text-uppercase mb-3">Pet Feeding</h5>
                  <p>Nutritious meals tailored to your pet's dietary needs, served with love and care.</p>
                  <a className=" text-uppercase Read-tag Read-tag" href="/Service">Read More<i className="bi bi-chevron-right"></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item bg-light d-flex p-4">
                <i className="flaticon-grooming display-1 text-primary me-4"></i>
                <div>
                  <h5 className="text-uppercase mb-3">Pet Grooming</h5>
                  <p>Professional grooming sessions to keep your pet looking and feeling their best, inside and out.</p>
                  <a className=" text-uppercase Read-tag Read-tag" href="/Service">Read More<i className="bi bi-chevron-right"></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item bg-light d-flex p-4">
                <i className="flaticon-cat display-1 text-primary me-4"></i>
                <div>
                  <h5 className="text-uppercase mb-3">Pet Training</h5>
                  <p>Expert training programs designed to enhance obedience and strengthen the bond between you and your pet.</p>
                  <a className=" text-uppercase Read-tag Read-tag" href="/Service">Read More<i className="bi bi-chevron-right"></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item bg-light d-flex p-4">
                <i className="flaticon-dog display-1 text-primary me-4"></i>
                <div>
                  <h5 className="text-uppercase mb-3">Pet Exercise</h5>
                  <p>Engaging physical activities to keep your pet active, healthy, and mentally stimulated.</p>
                  <a className=" text-uppercase Read-tag Read-tag" href="/Service">Read More<i className="bi bi-chevron-right"></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item bg-light d-flex p-4">
                <i className="flaticon-vaccine display-1 text-primary me-4"></i>
                <div>
                  <h5 className="text-uppercase mb-3">Pet Treatment</h5>
                  <p>Compassionate care and medical attention administered by trained professionals to ensure your pet's well-being.</p>
                  <a className=" text-uppercase Read-tag Read-tag" href="/Service">Read More<i className="bi bi-chevron-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
