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
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="EB1 A ">
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
                                                  <li><Link href="visa-details-5" className="current">EB1 A </Link></li>
                                                  <li><Link href="visa-details-6">EB2 NIW </Link></li>
                                                  <li><Link href="visa-details-7">UK Innovator Visa </Link></li>
                                                  <li><Link href="visa-details-8" >Canada Express Entry </Link></li>
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
                <h2>EB-1A Visa: Extraordinary Ability</h2>
                <p>The EB-1A (Employment-Based First Preference) visa is a popular immigration option for individuals with extraordinary abilities in their field. This visa allows top professionals to secure a green card in the U.S. without the need for employer sponsorship. It is a great choice for those who want to pursue opportunities in the U.S. independently.</p>
            </div>
            <figure className="image-box"><img src="/assets/images/EB-1A/Picture4.png" alt="EB-1A Visa" /></figure>
            <div className="lower-text">
                <p>In this guide, we'll explore who qualifies for the EB-1A visa, the eligibility criteria, and how to navigate the application process to secure a green card through extraordinary ability.</p>
            </div>
        </div>

        <div className="content-two mb_35">
            <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 left-column">
                    <div className="left-content">
                        <h3>EB-1A Visa Eligibility Criteria</h3>
                        <p>
                            - One-Time Achievement (Major Award): Winning a prestigious award like an Oscar, Pulitzer Prize, or Nobel Prize.<br/>
                            - Meeting 3 of 10 Criteria: If you haven’t won a major award, you can qualify by meeting at least three of the following:
                        </p>
                        <ul>
                            <li>Awards for excellence in your field</li>
                            <li>Membership in organizations requiring outstanding achievements</li>
                            <li>Published material about you or your work</li>
                            <li>Judging others’ work in your area of expertise</li>
                            <li>Original contributions to your field</li>
                            <li>Authorship of scholarly articles or books</li>
                            <li>Exhibiting artistic work</li>
                            <li>Leading roles in distinguished organizations</li>
                            <li>High salary indicating top earnings in your field</li>
                            <li>Commercial success (for artists)</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 right-column">
                    <div className="right-content">
                        <h3>Why Choose the EB-1A Visa?</h3>
                        <ul className="list-item clearfix">
                            <li>No Job Offer or Labor Certification Required</li>
                            <li>Priority Processing</li>
                            <li>Permanent Residency Upon Approval</li>
                        </ul>
                        <p>Choosing the EB-1A visa allows you to bypass the need for employer sponsorship, giving you the freedom to pursue opportunities in the U.S. independently. Additionally, its priority status often leads to faster processing times compared to other visa categories.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="content-three">
            <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                    <div className="single-item">
                        <figure className="image-box"><img src="/assets/images/EB-1A/Picture2.png" alt="Application Process" /></figure>
                        <div className="lower-content">
                            <h3>EB-1A Visa Application Process</h3>
                            <p>
                                - Gather Documentation: Proof of achievements and qualifications.<br/>
                                - Submit Form I-140: The Immigrant Petition for Alien Workers.<br/>
                                - Wait for Approval: Once approved, you can apply for a green card.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                    <div className="single-item">
                        <figure className="image-box"><img src="/assets/images/EB-1A/Capture.png" alt="Eligibility Challenges" /></figure>
                        <div className="lower-content">
                            <h3>Common Challenges</h3>
                            <p>
                                - Documenting Achievements: Meeting at least 3 of 10 criteria can be tough.<br/>
                                - Subjective Criteria: Standards like “significant contributions” can be subjective, so evidence must be clear and convincing.<br/>
                                - High Standards: USCIS sets very high expectations, so a comprehensive application is crucial.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                    <div className="single-item">
                        <figure className="image-box"><img src="/assets/images/EB-1A/Picture3.png" alt="Contact Us for Help" /></figure>
                        <div className="lower-content">
                            <h3>Contact Us for Assistance</h3>
                            <p>
                                The EB-1A application process is complex, but we can help you navigate it. At Ahiraf Consultant, we specialize in helping extraordinary individuals build a strong case for their visa application. Contact us for a consultation and start your U.S. journey today!
                            </p>
                            <ul className="list-item clearfix">
                                <li><Link href="visa-details">Start your application now!</Link></li>
                                <li><Link href="visa-details">Consult with our experts</Link></li>
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


