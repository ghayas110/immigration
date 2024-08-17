'use client'
import Link from "next/link";
import { useState } from "react";

const ProgressBar = ({ label, percent }) => (
  <div className="progress-box">
    <p>{label}</p>
    <div className="bar">
      <div className="bar-inner count-bar" style={{ width: `${percent}%` }}></div>
      <div className="count-text">{`${percent}%`}</div>
    </div>
  </div>
);

export default function Countries() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="skills-style-two sec-pad">
      <div className="auto-container">
        <div className="sec-title centred mb_60">
          <span className="sub-title">Countries We Serve</span>
          <h2>Comprehensive Visa Services <br />for Various Countries</h2>
        </div>
        <div className="tabs-box">
          <div className="tab-btn-box mb_160 centred">
            <ul className="tab-btns tab-buttons" role="tablist">
              <li className="nav-link" onClick={() => handleOnClick(1)}>
                <a className={activeIndex == 1 ? "nav-link active" : "nav-link"}>
                  <span>Government Approved</span>
                </a>
              </li>
              <li className="nav-item" onClick={() => handleOnClick(2)}>
                <a className={activeIndex == 2 ? "nav-link active" : "nav-link"}>
                  <span>No Hidden Costs</span>
                </a>
              </li>
              <li className="nav-item" onClick={() => handleOnClick(3)}>
                <a className={activeIndex == 3 ? "nav-link active" : "nav-link"}>
                  <span>Fast, Easy & Secure</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
            {/* Tab 1 - Government Approved */}
            <div className={activeIndex == 1 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 image-block">
                  <div className="image-box pl_120">
                    <figure className="image">
                      <img src="assets/images/resource/skills-1.jpg" alt="Government Approved Services" />
                    </figure>
                    <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-21.png)' }}></div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content_block_five">
                    <div className="content-box pr_120">
                      <div className="sec-title mb_30">
                        <span className="sub-title">100% Government Approved Services</span>
                        <h2>Get Professional and Reliable Visa Assistance</h2>
                      </div>
                      <div className="text mb_30">
                        <p>Our services are accredited and approved by respective governments, ensuring a smooth and lawful process for your visa applications.</p>
                      </div>
                      <div className="progress-inner mb_65">
                        <ProgressBar label="Student Visa" percent={90} />
                        <ProgressBar label="Business Visa" percent={75} />
                        <ProgressBar label="Residence Visa" percent={85} />
                      </div>
                      <div className="btn-box">
                        <Link href="/services" className="theme-btn btn-two"><span>More Details</span></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tab 2 - No Hidden Costs */}
            <div className={activeIndex == 2 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 image-block">
                  <div className="image-box pl_120">
                    <figure className="image">
                      <img src="assets/images/resource/skills-1.jpg" alt="No Hidden Costs" />
                    </figure>
                    <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-21.png)' }}></div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content_block_five">
                    <div className="content-box pr_120">
                      <div className="sec-title mb_30">
                        <span className="sub-title">Transparent and Honest Pricing</span>
                        <h2>No Hidden Costs - Pay Only What You See</h2>
                      </div>
                      <div className="text mb_30">
                        <p>We believe in full transparency, with no hidden fees or surprise charges. Our pricing is straightforward and includes all services.</p>
                      </div>
                      <div className="progress-inner mb_65">
                        <ProgressBar label="Student Visa" percent={85} />
                        <ProgressBar label="Business Visa" percent={70} />
                        <ProgressBar label="Residence Visa" percent={80} />
                      </div>
                      <div className="btn-box">
                        <Link href="/services" className="theme-btn btn-two"><span>More Details</span></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tab 3 - Fast, Easy & Secure */}
            <div className={activeIndex == 3 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 image-block">
                  <div className="image-box pl_120">
                    <figure className="image">
                      <img src="assets/images/resource/skills-1.jpg" alt="Fast Easy Secure Services" />
                    </figure>
                    <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-21.png)' }}></div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content_block_five">
                    <div className="content-box pr_120">
                      <div className="sec-title mb_30">
                        <span className="sub-title">Simple and Secure Process</span>
                        <h2>Fast, Easy & Secure Visa Applications</h2>
                      </div>
                      <div className="text mb_30">
                        <p>We offer a streamlined visa application process, with easy-to-follow steps and secure handling of your personal data.</p>
                      </div>
                      <div className="progress-inner mb_65">
                        <ProgressBar label="Student Visa" percent={95} />
                        <ProgressBar label="Business Visa" percent={80} />
                        <ProgressBar label="Residence Visa" percent={90} />
                      </div>
                      <div className="btn-box">
                        <Link href="/services" className="theme-btn btn-two"><span>More Details</span></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
