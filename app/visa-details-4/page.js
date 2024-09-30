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
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="E2 Treaty Investor Visa">
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
                                                  <li><Link href="visa-details-4" className="current">E2 Treaty Visa</Link></li>
                                                  <li><Link href="visa-details-5">EB1 A </Link></li>
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
                <h2>E2 Treaty Investor Visa</h2>
                <p>The E2 Treaty Investor Visa is a non-immigrant visa that allows individuals from certain treaty countries to invest in and actively manage a business within the United States. Designed for individuals looking to start or expand a business in the U.S., this visa offers significant benefits to eligible investors.</p>
            </div>
            <figure className="image-box"><img src="/assets/images/USAE-2TreatyVisa/000.png" alt="E2 Treaty Investor Visa" /></figure>
            <div className="lower-text">
                <p>In this guide, we'll explore the eligibility requirements, benefits, and application process for the E2 Visa, a fantastic opportunity for entrepreneurs from countries with which the U.S. maintains a treaty of commerce and navigation.</p>
            </div>
        </div>

        <div className="content-two mb_35">
            <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 left-column">
                    <div className="left-content">
                        <h3>Key Benefits of the E2 Visa</h3>
                        <p>
                            - Renewable Indefinitely: No limit on renewals as long as the business remains operational.<br/>
                            - Spouse Work Authorization: Your spouse can apply for work authorization in the U.S.<br/>
                            - Business Flexibility: Invest in a new or existing business.<br/>
                            - Faster Processing Time: E2 visas are processed faster compared to other investor visas.<br/>
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 right-column">
                    <div className="right-content">
                        <h3>Eligibility Criteria for the E2 Visa</h3>
                        <ul className="list-item clearfix">
                            <li>Treaty Country Requirement: Must be a citizen of a country that has a commerce and navigation treaty with the U.S.</li>
                            <li>Substantial Investment: Must make a significant investment in a U.S. business.</li>
                            <li>Business Must be Active: Passive investments do not qualify.</li>
                            <li>Ownership and Control: Must own at least 50% of the business and have operational control.</li>
                            <li>Intent to Leave: Must intend to leave the U.S. when E2 status ends.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="content-three">
            <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                    <div className="single-item">
                        <figure className="image-box"><img src="/assets/images/USAE-2TreatyVisa/investor-visa-application.jpg" alt="Visa Application Process" /></figure>
                        <div className="lower-content">
                            <h3>The E2 Visa Application Process</h3>
                            <p>
                                - Prepare Your Documentation: Gather necessary documents like proof of investment and business plan.<br/>
                                - Submit Form DS-160: Complete the online visa application and pay the fee.<br/>
                                - Attend a Visa Interview: Bring your documentation to the interview at a U.S. Embassy.<br/>
                                - Wait for Visa Approval: Receive your E2 visa to move to the U.S. and manage your business.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                    <div className="single-item">
                        <figure className="image-box"><img src="/assets/images/USAE-2TreatyVisa/e-2-visa.jpg" alt="E2 Visa Benefits" /></figure>
                        <div className="lower-content">
                            <h3>Faster Processing Time</h3>
                            <p>
                                E2 visas are generally processed faster compared to other investment-based visa programs like the EB-5 Immigrant Investor Program. This makes the E2 visa an appealing option for entrepreneurs seeking to quickly establish their business in the U.S.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                    <div className="single-item">
                        <figure className="image-box"><img src="/assets/images/USAE-2TreatyVisa/investment-capital.jpg" alt="Contact Us for Assistance" /></figure>
                        <div className="lower-content">
                            <h3>Contact Us for Assistance</h3>
                            <p>
                                If you're interested in applying for the E2 visa or need guidance on navigating the process, feel free to reach out to us. At Ahiraf Consultant, we provide expert advice to ensure your application is successful.
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


