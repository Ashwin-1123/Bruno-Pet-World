import React, { useEffect } from 'react';
import './Footer.css'

export const Footer = () => {
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                document.querySelector('.back-to-top').style.display = 'block';
            } else {
                document.querySelector('.back-to-top').style.display = 'none';
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <div className="container-fluid bg-dark text-white-50 py-4">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-md-6 text-center text-md-start">
                            <p className="mb-md-0">&copy; <a className="text-white" href="#">Bruno Pet World</a>. All Rights Reserved.</p>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            
                        </div>
                    </div>
                </div>
            </div>

            <button className="bttn fs-2 back-to-top" onClick={scrollToTop}><i className="bi bi-arrow-up"></i></button>
    </>
  )
}
