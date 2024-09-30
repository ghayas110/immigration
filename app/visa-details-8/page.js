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
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Canada Express Entry">
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
                                                  <li><Link href="visa-details-8" className="current" >Canada Express Entry </Link></li>
                                                  <li><Link href="visa-details-9" >Canada Provincial Nominee Program </Link></li>
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
                <h2>Canada Express Entry Visa</h2>
                <p>
                    Canada’s Express Entry system is one of the most popular immigration pathways for skilled workers looking to start a new life in Canada. Known for its efficiency and transparency, Express Entry allows individuals and families to secure permanent residency in Canada based on their skills and experience.
                </p>
            </div>
            <figure className="image-box"><img src="/assets/images/CanadaExpressEntry/0000.png" alt="Canada Express Entry Visa" /></figure>
            <div className="lower-text">
                <p>
                    This guide covers the eligibility criteria, application process, and benefits of the Canada Express Entry Visa, offering a fast route to permanent residency for skilled workers.
                </p>
            </div>
        </div>

        <div className="content-two mb_35">
            <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 left-column">
                    <div className="left-content">
                        <h3>Eligibility Criteria for Canada Express Entry</h3>
                        <ul>
                            <li><strong>Federal Skilled Worker Program (FSWP):</strong> At least one year of full-time work experience in a skilled occupation, CLB 7 in English or French, and an Educational Credential Assessment (ECA) for foreign qualifications.</li>
                            <li><strong>Federal Skilled Trades Program (FSTP):</strong> Experience in skilled trades such as construction, plumbing, or electrical work, and a job offer or certification from a Canadian authority.</li>
                            <li><strong>Canadian Experience Class (CEC):</strong> One year of skilled work experience in Canada in the last three years, with a minimum CLB score of 5 or 7 depending on your job.</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 right-column">
                    <div className="right-content">
                        <h3>Key Benefits of the Express Entry Visa</h3>
                        <ul className="list-item clearfix">
                            <li><strong>Permanent Residency:</strong> Successful applicants can live and work anywhere in Canada permanently.</li>
                            <li><strong>Family Sponsorship:</strong> You can include your spouse and dependent children in your application.</li>
                            <li><strong>Pathway to Citizenship:</strong> After living in Canada as a permanent resident for three years, you can apply for Canadian citizenship.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="content-three">
            <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                    <div className="single-item">
                        <figure className="image-box"><img src="/assets/images/CanadaExpressEntry/111.png" alt="Application Process" /></figure>
                        <div className="lower-content">
                            <h3>Application Process for Express Entry Visa</h3>
                            <p>
                                - <strong>Create an Online Profile:</strong> Submit your Express Entry profile with details on your education, work experience, and language skills.<br/>
                                - <strong>CRS Score:</strong> Receive a score based on factors like age, education, and work experience.<br/>
                                - <strong>Enter Express Entry Pool:</strong> Be ranked against other applicants in the pool.<br/>
                                - <strong>Invitation to Apply (ITA):</strong> Receive an ITA if your score is high enough.<br/>
                                - <strong>Submit Full Application:</strong> Complete the process with supporting documents like police certificates and medical exams.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                    <div className="single-item">
                        <figure className="image-box"><img src="/assets/images/CanadaExpressEntry/gh.png" alt="Costs and Processing Time" /></figure>
                        <div className="lower-content">
                            <h3>Costs and Processing Time</h3>
                            <p>
                                - <strong>Processing Time:</strong> Typically 6 months after submission.<br/>
                                - <strong>Fees:</strong> CAD $1365 per adult, with additional fees for dependents.<br/>
                                - <strong>Other Costs:</strong> Language tests, education assessments, medical exams, and police certificates.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                    <div className="single-item">
                        <figure className="image-box"><img src="/assets/images/CanadaExpressEntry/12.jpg" alt="Contact Us for Assistance" /></figure>
                        <div className="lower-content">
                            <h3>Contact Us for Assistance</h3>
                            <p>
                                If you're ready to start your journey to Canada, our team can help guide you through every step of the Express Entry application process. Contact us today to get started!
                            </p>
                            <ul className="list-item clearfix">
                                <li><Link href="express-entry-details">Start your application now!</Link></li>
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


