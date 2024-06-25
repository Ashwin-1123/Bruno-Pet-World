import React from 'react'
import './CSS/Hero.css'
export const Hero = () => {
    const handleVideoClick = (event) => {
        const videoUrl = event.target.getAttribute('data-src');
        const iframe = document.getElementById('videoModalIframe');
        iframe.src = videoUrl;
      };
    
      const closeModal = () => {
        const iframe = document.getElementById('videoModalIframe');
        iframe.src = '';
      };
  return (
    <>
        <div className="container-fluid py-5 hero-header">
        <div className="container py-5">
            <div className="row justify-content-start">
                <div className="col-lg-8 text-center text-lg-start">
                    <h1 className="display-1 text-uppercase text-white mb-lg-4">Pet world</h1>
                    <h1 className="text-uppercase d-flex align-items-left justify-content-left justify-content-lg-start pt-5 ">Make Your Pets Happy</h1>
                    <p className="fs-4 text-white mb-lg-4">Dolore tempor clita lorem rebum kasd eirmod dolore diam eos kasd. Kasd clita ea justo est sed kasd erat clita sea</p>
                    <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                        <a href="\Service" className="btn btn-outline-light border-2 py-md-3 px-md-5 me-5">Read More</a>
                        <button
                  type="button"
                  className="btn-play"
                  data-bs-toggle="modal"
                  data-src="https://www.youtube.com/embed/TlQtd9ygxs4" // Use embed URL
                  data-bs-target="#videoModal"
                  onClick={handleVideoClick}
                >
                  <span></span>
                </button>
                        <h5 className="font-weight-normal text-white m-0 ms-4 d-none d-sm-block">Play Video</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
     {/* Modal Structure */}
     <div className="modal fade" id="videoModal" tabIndex="-1" aria-labelledby="videoModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="videoModalLabel">Video</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
            </div>
            <div className="modal-body">
              <div className="ratio ratio-16x9">
                <iframe id="videoModalIframe" src="" title="YouTube video" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
