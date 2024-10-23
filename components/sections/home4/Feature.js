'use client'
import Link from "next/link";
import React from 'react';

export default function Feature() {
    return (
        <section className="feature-style-two sec-pad centred">
            <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-57.png)' }}></div>
            <div className="auto-container">
                <div className="sec-title centred mb_60">
                    <span className="sub-title">Features</span>
                    <h2>Providing Top-Quality Consulting <br />For Your Business Needs</h2>
                </div>
                <div className="row clearfix">
                <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-two wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box">
                                <i className="icon-17"></i>
                                 
                                    </div>
                                <h3><Link href="/passport-services">
                                Initial Consultation</Link></h3>
                                <p>
                                We begin with an in-depth consultation to understand your goals and assess your eligibility.
                                    </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box">
                                <i className="icon-18"></i>
                                    </div>
                                <h3><Link href="/visa-consulting">Document Preparation</Link></h3>
                                <p>Our team helps in gathering and preparing all necessary documentation to support your application.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-14"></i></div>
                                <h3><Link href="/translation-services">Final Approval</Link></h3>
                                <p>Once your application is approved, we guide you through the next steps, ensuring a smooth transition to your new country</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-two wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-19"></i></div>
                                <h3><Link href="/immigration-consulting">Permanent Residency</Link></h3>
                                <p>Helping businesses and individuals navigate the complexities of immigration law with tailored solutions.</p>
                            </div>
                        </div>
                    </div>
                 
                </div>
            </div>
        </section>
    );
};
