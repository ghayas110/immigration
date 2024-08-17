import Link from 'next/link';
import React from 'react';

export default function Countries()  {
  return (
    <section className="countries-style-five p_relative">
      <div className="pattern-layer">
        <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-61.png)' }}></div>
        <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-62.png)' }}></div>
      </div>
      <div className="auto-container">
        <div className="sec-title mb_60 light">
          <span className="sub-title">Countries We Offer</span>
          <h2>Apply For Quick Visa</h2>
        </div>
        <div className="row clearfix">
          <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
            <div className="countries-block-five wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image"><img src="assets/images/resource/countries-9.jpg" alt="" /></figure>
                  <div className="flag"><img src="assets/images/icons/flag-8.png" alt="" /></div>
                </div>
                <div className="lower-content">
                  <h5><Link href="index-4">Germany <span>Visa</span></Link></h5>
                  <span className="text">Berlin</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
            <div className="countries-block-five wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image"><img src="assets/images/resource/countries-10.jpg" alt="" /></figure>
                  <div className="flag"><img src="assets/images/icons/flag-2.png" alt="" /></div>
                </div>
                <div className="lower-content">
                  <h5><Link href="index-4">Canada <span>Visa</span></Link></h5>
                  <span className="text">Texas</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
            <div className="countries-block-five wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image"><img src="assets/images/resource/countries-11.webp" alt="" /></figure>
                  <div className="flag"><img src="assets/images/icons/flag-6.png" alt="" /></div>
                </div>
                <div className="lower-content">
                  <h5><Link href="index-4">USA <span>Visa</span></Link></h5>
                  <span className="text">New York</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
            <div className="countries-block-five wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image"><img src="assets/images/resource/countries-12.webp" alt="" /></figure>
                  <div className="flag"><img src="assets/images/icons/flag-4.png" alt="" /></div>
                </div>
                <div className="lower-content">
                  <h5><Link href="index-4">Australia <span>Visa</span></Link></h5>
                  <span className="text">Queensland</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

