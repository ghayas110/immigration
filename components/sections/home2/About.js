'use client'
import CounterUp from "@/components/elements/CounterUp"
import Link from "next/link";
import React from 'react';
export default function About()  {
  return (
    <section className="about-style-two p_relative">
    <div className="pattern-layer">
      <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-28.png)' }}></div>
      <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-29.png)' }}></div>
    </div>
    <div className="auto-container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-6 image-column">
                        <figure className="image-box]"><img src="assets/images/shape/shape8.jpg" alt="" /></figure>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content_block_four">
                            <div className="content-box">
                                <div className="sec-title mb_25">
                                    <span className="sub-title">About our Agency</span>
                                    <h2>Your Trusted Partner in Immigration and Overseas Education</h2>
                                    </div>
                                    <div className="text mb_45">
                  <p>With over 5 of experience, we have become a leading firm in immigration consulting, helping individuals and families achieve their dreams of relocating overseas. We specialize in visa applications, overseas education consulting, and admissions to top-ranked universities worldwide. Our personalized approach ensures that every client receives tailored advice, guidance, and support through every step of their journey.</p>
                  <p>Our services extend beyond visa processing; we provide thorough consulting to address each client’s unique needs, ensuring success whether it's for business, education, or personal relocation.</p>
                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  );
};

