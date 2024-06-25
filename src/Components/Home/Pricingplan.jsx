import React from 'react';
import plansData from './Json/plansData.json';

export const Pricingplan = () => {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="border-start border-5 border-primary ps-5 mb-5" style={{ maxWidth: '600px' }}>
            <h6 className="text-primary text-uppercase">Pricing Plan</h6>
            <h1 className="display-5 text-uppercase mb-0">Competitive Pricing For Pet Services</h1>
          </div>
          <div className="row g-5">
            {plansData.map((plan, index) => (
              <div key={index} className="col-lg-4">
                <div className="bg-light text-center pt-5">
                  <h2 className="text-uppercase">{plan.title}</h2>
                  <h6 className="text-body mb-5">{plan.description}</h6>
                  <div className="text-center bg-primary p-4 mb-2">
                    <h1 className="display-4 text-white mb-0">
                      <small className="align-top" style={{ fontSize: '22px', lineHeight: '45px' }}>$</small>
                      {plan.price}
                      <small className="align-bottom" style={{ fontSize: '16px', lineHeight: '40px' }}>
                        / {plan.interval}
                      </small>
                    </h1>
                  </div>
                  <div className="text-center ps-4 pt-4 pb-4">
                    <ul className="list-unstyled">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="mb-3">
                          <div className="d-flex align-items-center justify-content-between">
                            <span>{feature.name}</span>
                            {feature.included ? (
                              <i className="bi bi-check2 fs-4 text-primary"></i>
                            ) : (
                              <i className="bi bi-x fs-4 text-danger"></i>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                    <a href="/Product" className="btn btn-primary text-uppercase py-2  my-3 order-now">
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
