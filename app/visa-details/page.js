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
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Australia SubClass 189">
                {/* visa details section */}
                <section className="visa-details p_relative">
                <div className="auto-container">
                    <div className="row clearfix">
                    <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                        <div className="visa-sidebar default-sidebar">
                        <div className="sidebar-widget category-widget">
                            <ul className="category-list clearfix">
                            <li><Link href="visa-details" className="current">Australia SubClass 189</Link></li>
                                                  <li><Link href="visa-details-2" >Australia SubClass 190</Link></li>
                                                  <li><Link href="visa-details-3">Australia SubClass 491</Link></li>  
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
                   
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 content-side">
    <div className="visa-details-content">
        <div className="content-one mb_60">
            <div className="text mb_45">
                <h2>Australia Subclass 189</h2>
                <h3>Australia Subclass 189 Visa: Your Path to Permanent Residency</h3>

                <p>The Subclass 189 visa, also known as the Skilled Independent Visa, is one of the most sought-after visas for individuals wishing to immigrate to Australia. This visa allows skilled workers to live and work permanently in Australia without requiring sponsorship from an employer, a state, or a family member. It offers a direct route to permanent residency, making it an attractive option for professionals worldwide.</p>
            </div>
            <figure className="image-box"><img src="assets/images/resource/visa-12.jpg" alt="Subclass 189 Visa" /></figure>
            <div className="lower-text">
                <p>In this blog, we'll explore the Subclass 189 visa, its eligibility criteria, and why it's a great choice for skilled workers looking to build a future in Australia.</p>
            </div>
        </div>
        
        <div className="content-two mb_35">
            <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 left-column">
                    <div className="left-content">
                        <h3>Key Benefits of the Subclass 189 Visa</h3>
                        <p>
                            - Permanent Residency (PR): Provides full residency status in Australia.<br/>
                            - Work and Study: Freedom to work and study anywhere in Australia.<br/>
                            - Family Inclusion: You can include family members in your application.<br/>
                            - Travel Rights: You can travel in and out of Australia freely for five years.<br/>
                            - Pathway to Citizenship: Offers a pathway to Australian citizenship after fulfilling residency requirements.
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 right-column">
                    <div className="right-content">
                        <h3>Eligibility Criteria for Subclass 189 Visa</h3>
                        <ul className="list-item clearfix">
                            <li>Occupation on the Skilled Occupation List</li>
                            <li>Skills Assessment</li>
                            <li>Points-Based System</li>
                            <li>Age Limit: Must be under 45 years old</li>
                            <li>Expression of Interest (EOI)</li>
                            <li>Invitation to Apply</li>
                            <li>Health and Character Requirements</li>
                            <li>English Language Requirements</li>
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
                            <h3>Application Process for Subclass 189 Visa</h3>
                            <p>
                                - Submit an Expression of Interest (EOI).<br/>
                                - Wait for an invitation to apply.<br/>
                                - Apply for the visa within 60 days.<br/>
                                - Visa Decision.<br/>
                                - Receive visa and prepare for Australia as a permanent resident!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                    <div className="single-item">
                        <figure className="image-box"><img src="assets/images/resource/visa-14.jpg" alt="Visa Processing Times" /></figure>
                        <div className="lower-content">
                            <h3>Processing Time for Subclass 189 Visa</h3>
                            <p>
                                - 75% of applications processed within 5 to 7 months.<br/>
                                - 90% of applications processed within 7 to 12 months.<br/>
                                Ensure all documents are complete to avoid delays.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                    <div className="single-item">
                        <figure className="image-box"><img src="assets/images/resource/visa-15.jpg" alt="Why Choose Subclass 189" /></figure>
                        <div className="lower-content">
                            <h3>Why Choose the Subclass 189 Visa?</h3>
                            <p>
                                The Subclass 189 visa is an excellent option for skilled professionals looking for a fresh start in Australia. With its straightforward points-based system and opportunity for permanent residency, it can be life-changing for many.
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


