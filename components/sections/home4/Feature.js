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
                        <div className="feature-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-17"></i></div>
                                <h3><Link href="/visa-consulting">Visa Assistance</Link></h3>
                                <p>Expert guidance through visa applications, ensuring a seamless process for individuals and businesses.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-two wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-18"></i></div>
                                <h3><Link href="/passport-services">Passport Services</Link></h3>
                                <p>Providing reliable passport services, from renewals to first-time applications, with a focus on accuracy.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-two wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-19"></i></div>
                                <h3><Link href="/immigration-consulting">Immigration Consulting</Link></h3>
                                <p>Helping businesses and individuals navigate the complexities of immigration law with tailored solutions.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-20"></i></div>
                                <h3><Link href="/translation-services">Document Translation</Link></h3>
                                <p>Certified translation services for legal, financial, and personal documents, ensuring accuracy across languages.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
