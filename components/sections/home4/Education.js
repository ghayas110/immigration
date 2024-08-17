import Image from 'next/image';
import React from 'react';

export default function Education() {
  return (
    <section className="education-section alternat-2 p_relative">
      <div className="bg-layer-2" style={{ backgroundImage: 'url(assets/images/shape/shape-16.png)' }}></div>
      <div className="bg-layer parallax-bg" data-parallax='{"y": 100}' style={{ backgroundImage: 'url(assets/images/background/education-bg.jpg)' }}></div>
      <figure className="image-layer wow slideInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
        <img src="assets/images/resource/men-1.png" alt="" />
      </figure>
      <div className="shape">
        <div className="shape-2" style={{ backgroundImage: 'url(assets/images/shape/shape-19.png)' }}></div>
      </div>
      <div className="auto-container">
        <div className="content_block_three">
          <div className="content-box p_relative d_block">
            <h2>Looking for Quality <span>Business In</span> Abroad?</h2>
            <p>Where did this incorrect belief that everyone dislikes praising happiness come from? Explain to me how this erroneous theory ended up being devised.</p>
            <ul className="country-list">
              <li>
                <div className="flag"><Image src="/assets/images/icons/flag-6.png" alt="" width={50} height={50} /></div>
                <span>United States</span>
              </li>
              <li>
                <div className="flag"><img src="assets/images/icons/flag-2.png" alt="" width={50} height={50}/></div>
                <span>Canada</span>
              </li>
              <li>
                <div className="flag"><img src="assets/images/icons/flag-8.png" alt="" width={50} height={50}/></div>
                <span>Germany</span>
              </li>
              <li>
                <div className="flag"><img src="assets/images/icons/flag-4.png" alt="" width={50} height={50}/></div>
                <span>Australia</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

