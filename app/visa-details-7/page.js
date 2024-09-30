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
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="UK Innovator Visa">
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
                                                  <li><Link href="visa-details-7" className="current">UK Innovator Visa </Link></li>
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
                <h2>UK Innovator Visa</h2>
                <p>The UK Innovator Visa offers an exciting opportunity for experienced entrepreneurs looking to establish or run a business in the UK. It is designed for innovative thinkers with unique business ideas that are new to the UK market. If you’re an entrepreneur interested in relocating to the UK, the Innovator Visa could be the key to unlocking your business potential in one of the world's most dynamic markets.</p>
            </div>
            <figure className="image-box"><img src="/assets/images/UKInnovatorvisa/hjk.jpg" alt="UK Innovator Visa" /></figure>
            <div className="lower-text">
                <p>This guide covers the eligibt6ggfuria, application process, and benefits of the UK Innovator Visa, a great option for experienced businesspeople with innovative ideas.</p>
            </div>
        </div>

        <div className="content-two mb_35">
            <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 left-column">
                    <div className="left-content">
                        <h3>Eligibility Criteria for UK Innovator Visa</h3>
                        <ul>
                            <li><strong>Innovative Business Idea:</strong> Your idea must be new, unique, and not an existing business. It must offer something innovative with clear potential for growth and job creation.</li>
                            <li><strong>Endorsement by an Approved Body:</strong> You need an endorsement from an approved UK body that confirms your business idea is innovative, viable, and scalable.</li>
                            <li><strong>Investment Funds:</strong> You must have at least £50,000 in investment funds to start your business. If switching from the Start-up Visa, you may not need additional funding.</li>
                            <li><strong>Experience and Expertise:</strong> Applicants should demonstrate significant business experience in their field.</li>
                            <li><strong>English Language Proficiency:</strong> You need to prove English proficiency at a B2 level or higher on the CEFR.</li>
                            <li><strong>Maintenance Funds:</strong> You must have £1270 in personal savings to support yourself, and more if bringing family members.</li>
                            <li><strong>Residency Requirement:</strong> You must spend at least 180 days per year in the UK to maintain visa status.</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 right-column">
                    <div className="right-content">
                        <h3>Key Benefits of the UK Innovator Visa</h3>
                        <ul className="list-item clearfix">
                            <li><strong>Permanent Residency:</strong> After three years, you can apply for Indefinite Leave to Remain (ILR), which allows you to live and work in the UK permanently.</li>
                            <li><strong>Family Involvement:</strong> You can bring your spouse and children with you to the UK.</li>
                            <li><strong>Business Flexibility:</strong> You can work full-time on your business and be involved in multiple ventures if they meet the Innovator Visa criteria.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="content-three">
            <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                    <div className="single-item">
                        <figure className="image-box"><img src="/assets/images/UKInnovatorvisa/Cap.png" alt="Application Process" /></figure>
                        <div className="lower-content">
                            <h3>Application Process for UK Innovator Visa</h3>
                            <p>
                                - <strong>Endorsement:</strong> Secure an endorsement from an approved body.<br/>
                                - <strong>Prepare Documents:</strong> Collect evidence of identity, endorsement, investment funds, English proficiency, and personal savings.<br/>
                                - <strong>Online Application:</strong> Apply online and pay the visa fee.<br/>
                                - <strong>Biometric Information:</strong> Submit fingerprints and photo.<br/>
                                - <strong>Decision:</strong> Generally takes 3 weeks for a decision if applying from outside the UK.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                    <div className="single-item">
                        <figure className="image-box"><img src="/assets/images/UKInnovatorvisa/u.jpeg" alt="Visa Extension and Cost" /></figure>
                        <div className="lower-content">
                            <h3>Visa Extension and Costs</h3>
                            <p>
                                - <strong>Cost:</strong> The visa fee is £1036 if applying from outside the UK, and £1292 if applying from within.<br/>
                                - <strong>Healthcare Surcharge:</strong> Pay £624 per year for the Immigration Health Surcharge.<br/>
                                - <strong>Extension:</strong> Extend your visa for another three years if you continue to meet the criteria. There’s no limit to how many times it can be extended.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                    <div className="single-item">
                        <figure className="image-box"><img src="/assets/images/UKInnovatorvisa/m.webp" alt="Contact Us for Assistance" /></figure>
                        <div className="lower-content">
                            <h3>Contact Us for Assistance</h3>
                            <p>
                                If you need help applying for the UK Innovator Visa, our consultancy can guide you through the process—from preparing your business plan to securing your endorsement. Contact us today to start your journey to launching a business in the UK!
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


