'use client'
import Link from "next/link";
import Layout from "@/components/layout/Layout"

import { useState } from 'react'
import Countries from "@/components/sections/home4/Countries";
export default function Home() {
  const [activeIndex, setActiveIndex] = useState(4)
  const handleOnClick = (index) => {
      setActiveIndex(index)
  }
    const [isOpen, setOpen] = useState(false)
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="About Us">
                {/* about-section */}
                <section className="about-style-three about-page p_relative">
      <div className="pattern-layer">
        <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-42.png)' }}></div>
        <div className="pattern-3" style={{ backgroundImage: 'url(assets/images/shape/shape-69.png)' }}></div>
        <div className="pattern-4" style={{ backgroundImage: 'url(assets/images/shape/shape-70.png)' }}></div>
      </div>
      <figure className="image-layer"><img src="assets/images/resource/men-2.png" alt="" /></figure>
      <div className="auto-container">
  <div className="row clearfix">
    <div className="col-lg-4 col-md-12 col-sm-12 content-column offset-lg-3">
      <div className="content_block_six">
        <div className="content-box mr_20">
          <div className="sec-title mb_20">
            <span className="sub-title">Who We Are</span>
            <h2>Your Trusted Partner in Immigration Services</h2>
          </div>
          <div className="text mb_30">
            <p>With over a decade of experience, we specialize in providing comprehensive immigration services. Whether you’re looking to study abroad, work, or permanently relocate, our expert team is here to guide you through every step of the immigration process.</p>
          </div>
          <div className="inner-box mb_40">
            <div className="single-item">
              <div className="icon-box">
                <img src="assets/images/icons/icon-13.png" alt="Education Icon" />
              </div>
              <h5>Expert Overseas Education & Study Visa Consultants</h5>
            </div>
            <div className="single-item">
              <div className="icon-box">
                <img src="assets/images/icons/icon-14.png" alt="University Admission Icon" />
              </div>
              <h5>Guaranteed Admissions to Top-Ranked Universities</h5>
            </div>
          </div>
          <div className="btn-box">
            <Link href="/about" className="theme-btn btn-two">
              <span>Learn More</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-5 col-md-12 col-sm-12 image-column">
      <div className="image-inner clearfix">
        <div className="image-shape" style={{ backgroundImage: 'url(assets/images/shape/shape-44.png)' }}></div>
        <div className="image-box">
          <figure className="image">
            <img src="assets/images/resource/about-3.jpg" alt="Immigration Consulting" />
          </figure>
        </div>
        <div className="image-box">
          <figure className="image">
            <img src="assets/images/resource/about-4.jpg" alt="Client Success Stories" />
          </figure>
          <figure className="image">
            <img src="assets/images/resource/about-5.jpg" alt="Our Team in Action" />
          </figure>
        </div>
      </div>
    </div>
  </div>
</div>

    </section>
                {/* about-section end */}
                {/* feature -section */}
                <section className="feature-section about-page alternat-3 pb_150">
                  <div className="auto-container">
                    <div className="inner-container">
                      <div className="shape-2" style={{ backgroundImage: 'url(assets/images/shape/shape-41.png)' }}></div>
                      <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                          <div className="feature-block-one">
                            <div className="inner-box">
                              <div className="icon-box"><i className="icon-17"></i></div>
                              <h3><Link href="/">Visa</Link></h3>
                              <p>Expert guidance through visa applications, ensuring a seamless process for individuals and businesses.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                          <div className="feature-block-one">
                            <div className="inner-box">
                              <div className="icon-box"><i className="icon-18"></i></div>
                              <h3><Link href="/">Passport</Link></h3>
                              <p>Providing reliable passport services, from renewals to first-time applications, with a focus on accuracy..</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                          <div className="feature-block-one">
                            <div className="inner-box">
                              <div className="icon-box"><i className="icon-19"></i></div>
                              <h3><Link href="/">Immigration</Link></h3>
                              <p>Helping businesses and individuals navigate the complexities of immigration law with tailored solutions.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                          <div className="feature-block-one">
                            <div className="inner-box">
                              <div className="icon-box"><i className="icon-20"></i></div>
                              <h3><Link href="/">Translation</Link></h3>
                              <p>Certified translation services for legal, financial, and personal documents, ensuring accuracy across languages.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                    {/* feature-section end */}
                {/* country*/}
                <section className="countries-style-three alternat-2 sec-pad">
            <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-63.png)' }}></div>
            <Countries />
                 </section>
                {/* country end */}
                    {/* Country 1*/}
                  
                    {/* country 1 end*/}
                     {/* chooseus-section */}
                     <section className="chooseus-section p_relative">
  <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-71.png)' }}></div>
  <div className="auto-container">
    <div className="sec-title centred mb_60">
      <span className="sub-title">Why Choose Us</span>
      <h2>We Offer Custom-Made Services That Meet <br />Your Unique Immigration Needs</h2>
    </div>
    <div className="row clearfix">
      {/* Block 1 - Direct Interviews */}
      <div className="col-lg-3 col-md-6 col-sm-12 chooseus-block">
        <div className="chooseus-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
          <div className="inner-box">
            <div className="icon-box"><img src="assets/images/icons/icon-1.png" alt="Direct Interviews Icon" /></div>
            <h3><Link href="/">Direct Interviews</Link></h3>
            <p>We facilitate direct interviews with top employers and institutions, ensuring you get the best opportunities without unnecessary delays.</p>
       
          </div>
        </div>
      </div>

      {/* Block 2 - Faster Processing */}
      <div className="col-lg-3 col-md-6 col-sm-12 chooseus-block">
        <div className="chooseus-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
          <div className="inner-box">
            <div className="icon-box"><img src="assets/images/icons/icon-2.png" alt="Faster Processing Icon" /></div>
            <h3><Link href="/">Faster Processing</Link></h3>
            <p>Our streamlined application process ensures quicker visa approvals, so you can make your move without unnecessary delays.</p>
       
          </div>
        </div>
      </div>

      {/* Block 3 - Visa Assistance */}
      <div className="col-lg-3 col-md-6 col-sm-12 chooseus-block">
        <div className="chooseus-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
          <div className="inner-box">
            <div className="icon-box"><img src="assets/images/icons/icon-3.png" alt="Visa Assistance Icon" /></div>
            <h3><Link href="/">Visa Assistance</Link></h3>
            <p>Our team provides expert assistance at every stage of your visa application, ensuring a smooth and successful process.</p>
       
          </div>
        </div>
      </div>

      {/* Block 4 - Cost-Effective Solutions */}
      <div className="col-lg-3 col-md-6 col-sm-12 chooseus-block">
        <div className="chooseus-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
          <div className="inner-box">
            <div className="icon-box"><img src="assets/images/icons/icon-4.png" alt="Cost-Effective Solutions Icon" /></div>
            <h3><Link href="/">Cost-Effective Solutions</Link></h3>
            <p>We offer affordable immigration services without compromising on quality, ensuring you get the best value for your investment.</p>
       
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

                {/* chooseus-section */}
                {/* clients-section */}
       
                {/* team-section */}

            </Layout>
        </>
    )
}


