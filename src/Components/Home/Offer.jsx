import React from 'react'
import './CSS/Hero.css'
export const Offer = () => {
  return (
    <>
        <div className="container-fluid bg-offer my-5 py-5">
        <div className="container py-5">
            <div className="row gx-5 justify-content-start">
                <div className="col-lg-7">
                    <div className="border-start border-5 border-dark ps-5 mb-5">
                        <h6 className="text-dark text-uppercase">Special Offer</h6>
                        <h1 className="display-5 text-uppercase text-dark mb-0">Save 50% on all items your first order</h1>
                    </div>
                    <p className="text-light mb-4">Pamper your pet with top-quality products including food, grooming essentials, toys, and more. Don't wait—take advantage of this limited-time offer to provide the best care and happiness for your beloved companion.</p>
                    <a href="/Product" className="btn btn-light py-md-3 px-md-5 me-3">Shop Now</a>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
