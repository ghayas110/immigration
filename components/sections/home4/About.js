import Link from 'next/link';
import React from 'react';

export default function About() {
  return (
    <section className="about-style-four p_relative">
      <div className="pattern-layer">
        <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-59.png)' }}></div>
        <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-60.png)' }}></div>
      </div>
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-6 col-md-12 col-sm-12 image-column">
            <div className="image_block_two">
              <div className="image-box">
                <div className="image-shape"></div>
                <figure className="image image-1"><img src="assets/images/resource/about-6.jpg" alt="Immigration Consulting Experience" /></figure>
                <figure className="image image-2"><img src="assets/images/resource/about-7.jpg" alt="Client Success Stories" /></figure>
                <div className="text-box">
                  <h2>20 <span>+</span></h2>
                  <h3>Years of Excellence</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content_block_seven">
              <div className="content-box">
                <div className="sec-title mb_30">
                  <span className="sub-title">Who We Are</span>
                  <h2>Your Trusted Partner in Immigration and Overseas Education</h2>
                </div>
                <div className="text mb_45">
                  <p>With over two decades of experience, we have become a leading firm in immigration consulting, helping individuals and families achieve their dreams of relocating overseas. We specialize in visa applications, overseas education consulting, and admissions to top-ranked universities worldwide. Our personalized approach ensures that every client receives tailored advice, guidance, and support through every step of their journey.</p>
                  <p>Our services extend beyond visa processing; we provide thorough consulting to address each client’s unique needs, ensuring success whether it's for business, education, or personal relocation.</p>
                </div>
                <div className="inner-box mb_45">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                      <div className="single-item">
                        <div className="icon-box"><img src="assets/images/icons/icon-13.png" alt="Overseas Education Icon" /></div>
                        <h5>Overseas education and study visa consultants</h5>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                      <div className="single-item">
                        <div className="icon-box"><img src="assets/images/icons/icon-14.png" alt="Top Universities Icon" /></div>
                        <h5>Admissions to top-ranked universities globally</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-box">
                  <Link href="/services" className="theme-btn btn-two"><span>More Details</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
