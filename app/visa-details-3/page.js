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
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Residence Visas">
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
                                                  <li><Link href="visa-details-3" className="current">Australia SubClass 491</Link></li>  
                                                  <li><Link href="visa-details-4">E2 Treaty Visa</Link></li>
                                                  <li><Link href="visa-details-5">EB1 A </Link></li>
                                                  <li><Link href="visa-details-6">EB2 NIW </Link></li>
                                                  <li><Link href="visa-details-7">UK Innovator Visa </Link></li>
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
                        <div className="sidebar-widget download-widget">
                            <div className="widget-content">
                            <div className="icon-shape"><img src="assets/images/icons/icon-15.png" alt="" /></div>
                            <h3>Annual Report / <br />Online Appointment</h3>
                            <ul className="download-list clearfix">
                                <li>
                                <Link href="visa-details">
                                    <i className="icon-50"></i>
                                    <p>Application Form</p>
                                    <span>450kb</span>
                                </Link>
                                </li>
                                <li>
                                <Link href="visa-details">
                                    <i className="icon-50"></i>
                                    <p>Application Form</p>
                                    <span>450kb</span>
                                </Link>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 content-side">
    <div className="visa-details-content">
        <div className="content-one mb_60">
            <div className="text mb_45">
                <h2>Australia Subclass 491 Visa</h2>
                <p>The Subclass 491 Skilled Work Regional (Provisional) Visa is a temporary visa for skilled workers who want to live and work in regional Australia. It offers a pathway to permanent residency and is aimed at individuals who can contribute to the regional workforce and fill skill shortages in designated areas of Australia.</p>
            </div>
            <figure className="image-box"><img src="assets/images/resource/visa-17.jpg" alt="Australia Subclass 491" /></figure>
            <div className="lower-text">
                <p>This visa has gained popularity among migrants due to its relatively accessible requirements and opportunities for eventual permanent residency.</p>
            </div>
        </div>
        
        <div className="content-two mb_35">
            <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 left-column">
                    <div className="left-content">
                        <h3>Key Benefits of the Subclass 491 Visa</h3>
                        <p>
                            - Long-term Residency: The visa is valid for 5 years.<br/>
                            - Pathway to Permanent Residency: After 3 years of meeting income and residence requirements, you can apply for permanent residency through the Subclass 191 Visa.<br/>
                            - Work in Regional Areas: Tap into job opportunities in regional Australia.<br/>
                            - Access to Medicare: You can access Australia’s public healthcare system.<br/>
                            - Include Family Members: You can include family members in your application.
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 right-column">
                    <div className="right-content">
                        <h3>Eligibility Criteria for Subclass 491 Visa</h3>
                        <ul className="list-item clearfix">
                            <li>Nomination or Sponsorship: By a state/territory government or family member in regional Australia.</li>
                            <li>Skills Assessment: Required for your nominated occupation listed on the skilled occupation list.</li>
                            <li>Points Test: Minimum of 65 points required.</li>
                            <li>Age Limit: Under 45 years of age.</li>
                            <li>English Proficiency: Competent English language skills required.</li>
                            <li>Health and Character Requirements.</li>
                            <li>Commitment to Living in Regional Australia.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="content-three">
            <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                    <div className="single-item">
                        <figure className="image-box"><img src="assets/images/resource/visa-13.jpg" alt="Visa Application Process" /></figure>
                        <div className="lower-content">
                            <h3>The Application Process</h3>
                            <p>
                                - Submit an Expression of Interest (EOI).<br/>
                                - State or Family Sponsorship.<br/>
                                - Invitation to Apply.<br/>
                                - Visa Application.<br/>
                                - Processing and Grant.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                    <div className="single-item">
                        <figure className="image-box"><img src="assets/images/resource/visa-14.jpg" alt="Permanent Residency Pathway" /></figure>
                        <div className="lower-content">
                            <h3>Permanent Residency Pathway: Subclass 191 Visa</h3>
                            <p>
                                After holding the 491 Visa for 3 years and meeting income requirements, you can apply for the Subclass 191 Visa, which grants permanent residency.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                    <div className="single-item">
                        <figure className="image-box"><img src="assets/images/resource/visa-15.jpg" alt="Contact Us" /></figure>
                        <div className="lower-content">
                            <h3>Contact Us for Guidance</h3>
                            <p>
                                If you’re considering applying for the Subclass 491 Visa and need professional guidance, feel free to contact us. We provide expert consultation to help you navigate the application process smoothly.
                            </p>
                            <ul className="list-item clearfix">
                                <li><Link href="visa-details">Start your journey today!</Link></li>
                                <li><Link href="visa-details">Contact us for expert advice</Link></li>
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


