import React from 'react';

export default function Dream() {
  return (
    <section className="dream-style-two sec-pad p_relative">
      <div className="outer-container clearfix">
        <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/shape/shape9.jpg)' }}></div>
        <div className="content-column">
          <div className="pattern-layer">
            <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-51.png)' }}></div>
            <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-52.png)' }}></div>
          </div>
          <div className="content_block_two">
            <div className="content-box p_relative d_block">
              <div className="sec-title light mb_20">
                <span className="sub-title">Reach Your Dream</span>
                <h2>Get the Right Help</h2>
              </div>
              <div className="text mb_25">
              <p>With over 5 of experience, we have become a leading firm in immigration consulting, helping individuals and families achieve their dreams of relocating overseas. We specialize in visa applications, overseas education consulting, and admissions to top-ranked universities worldwide. Our personalized approach ensures that every client receives tailored advice, guidance, and support through every step of their journey.</p>
              </div>
              <ul className="list-item p_relative clearfix mb_50">
                <li><a href="/">1. Entering & Leaving From Country <i className="icon-9"></i></a></li>
                <li><a href="/">2. Help & Support <i className="icon-9"></i></a></li>
                <li><a href="/">3. Country Citizenship <i className="icon-9"></i></a></li>
              </ul>
              <div className="btn-box">
                <a href="index-3" className="theme-btn"><span>More Details</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

