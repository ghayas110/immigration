'use client'
import Link from "next/link";
import Layout from "@/components/layout/Layout"

import { useState } from 'react'
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
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Canada Provincial Nominee Program">
                {/* visa details section */}
                <section className="visa-details p_relative">
                <div className="auto-container">
                    <div className="row clearfix">
                    <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                        <div className="visa-sidebar default-sidebar">
                        <div className="sidebar-widget category-widget">
                            <ul className="category-list clearfix">
                            <li><Link href="visa-details">Australia SubClass 189</Link></li>
                            <li><Link href="visa-details-2"  >Australia SubClass 190</Link></li>
                            <li><Link href="visa-details-3" >Australia SubClass 491</Link></li>  
                                                  <li><Link href="visa-details-4" >E2 Treaty Visa</Link></li>
                                                  <li><Link href="visa-details-5">EB1 A </Link></li>
                                                  <li><Link href="visa-details-6"  >EB2 NIW </Link></li>
                                                  <li><Link href="visa-details-7" >UK Innovator Visa </Link></li>
                                                  <li><Link href="visa-details-8" >Canada Express Entry </Link></li>
                                                  <li><Link href="visa-details-9" className="current">Canada Provincial Nominee Program </Link></li>
                            </ul>
                        </div>
                        <div className="sidebar-widget travel-widget">
                            <div className="widget-content p_relative">
                            <figure className="image-box"><img src="assets/images/resource/travel-1.jpg" alt="" /></figure>
                            <div className="content-box">
                                <h3>Travel Pass</h3>
                                <ul className="list-item clearfix">
                                <li>Application Form</li>
                                <li>Checklist</li>
                                <li>Guidelines</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 content-side">
    <div className="visa-details-content">
        <div className="content-one mb_60">
            <div className="text mb_45">
                <h2>Canada Provincial Nominee Program (PNP)</h2>
                <p>
                    Canada’s Provincial Nominee Program (PNP) is a key immigration pathway for individuals who want to live and work in specific provinces or territories in Canada. It is designed to address local labor shortages and boost regional economic growth.
                </p>
            </div>
            <figure className="image-box"><img src="/assets/images/CanadaPNP/pnp3.jpg" alt="Canada PNP Visa" /></figure>
            <div className="lower-text">
                <p>
                    This guide covers the eligibility criteria, application process, and benefits of the Canada PNP, offering a tailored immigration option for skilled workers and entrepreneurs seeking to settle in specific Canadian provinces.
                </p>
            </div>
        </div>

        <div className="content-two mb_35">
            <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 left-column">
                    <div className="left-content">
                        <h3>Eligibility Criteria for PNP</h3>
                        <ul>
                            <li><strong>Skills in Demand:</strong> Applicants must have skills and experience in occupations that are in demand in the province.</li>
                            <li><strong>Work Experience:</strong> At least one year of skilled work experience, either in Canada or abroad, is typically required.</li>
                            <li><strong>Language Proficiency:</strong> You must demonstrate proficiency in English or French through language tests like IELTS or TEF.</li>
                            <li><strong>Educational Credentials:</strong> An Educational Credential Assessment (ECA) may be required to verify that your education meets Canadian standards.</li>
                            <li><strong>Job Offer:</strong> Some provinces require a valid job offer from an employer, but this is not mandatory for all streams.</li>
                            <li><strong>Residency Intention:</strong> Applicants must intend to live and work in the province that nominates them.</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 right-column">
                    <div className="right-content">
                        <h3>Key Benefits of the PNP</h3>
                        <ul className="list-item clearfix">
                            <li><strong>Increased CRS Points:</strong> A provincial nomination through an Express Entry-aligned stream increases your CRS score by 600 points, virtually guaranteeing an Invitation to Apply (ITA).</li>
                            <li><strong>Faster Processing Times:</strong> Express Entry-linked PNP streams usually offer faster processing times, typically around six months.</li>
                            <li><strong>Tailored Streams:</strong> Some provinces have specific streams for entrepreneurs, international graduates, and workers in high-demand sectors.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="content-three">
            <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                    <div className="single-item">
                        <figure className="image-box"><img src="/assets/images/CanadaPNP/pnp2.png" alt="Application Process" /></figure>
                        <div className="lower-content">
                            <h3>Application Process for PNP</h3>
                            <p>
                                - <strong>Choose a Province:</strong> Select the province or territory that best matches your skills and experience.<br/>
                                - <strong>Submit an Expression of Interest (EOI):</strong> Show your interest in the province's program.<br/>
                                - <strong>Receive a Nomination:</strong> The province will assess your profile and may nominate you for permanent residency.<br/>
                                - <strong>Apply for Permanent Residency:</strong> Once nominated, apply to the federal government for permanent residency.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 single-column">xz
                    <div className="single-item">
                        <figure className="image-box"><img src="/assets/images/CanadaPNP/pnp.png" alt="Processing Time and Cost" /></figure>
                        <div className="lower-content">
                            <h3>Processing Time and Costs</h3>
                            <p>
                                - <strong>Processing Time:</strong> Around six months for Express Entry-linked PNP streams.<br/>
                                - <strong>Cost:</strong> Application fees vary by province and additional federal processing fees apply.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                    <div className="single-item">
                        <figure className="image-box"><img src="/assets/images/CanadaPNP/pnp3.jpg" alt="Contact Us for Assistance" /></figure>
                        <div className="lower-content">
                            <h3>Contact Us for Assistance</h3>
                            <p>
                                If you need help applying for the Canada PNP, our team of immigration experts can guide you through the process. Contact us today to start your journey to permanent residency in Canada!
                            </p>
                            <ul className="list-item clearfix">
                                <li><Link href="pnp-details">Start your application now!</Link></li>
                                <li><Link href="consult-experts">Consult with our experts</Link></li>
                            </ul>
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
                                    {/*visa details end*/}
                                

                            </Layout>
        </>
    )
}


