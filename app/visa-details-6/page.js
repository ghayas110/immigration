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
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="EB2 NIW">
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
                                                  <li><Link href="visa-details-6"  className="current">EB2 NIW </Link></li>
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
                <h2>EB-2 National Interest Waiver (NIW)</h2>
                <p>The EB-2 National Interest Waiver (NIW) program is one of the most sought-after immigration paths to the United States for professionals with advanced degrees or exceptional abilities. It allows qualified applicants to bypass the traditional labor certification process, offering a faster route to permanent residency.</p>
            </div>
            <figure className="image-box"><img src="assets/images/resource/visa-20.jpg" alt="EB-2 NIW Visa" /></figure>
            <div className="lower-text">
                <p>In this guide, we'll explore the eligibility criteria, benefits, and application process of the EB-2 NIW program for individuals whose expertise and contributions are in the national interest of the United States.</p>
            </div>
        </div>

        <div className="content-two mb_35">
            <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 left-column">
                    <div className="left-content">
                        <h3>Eligibility Criteria for EB-2 NIW</h3>
                        <ul>
                            <li><strong>Advanced Degree Professionals:</strong> Applicants must have a U.S. advanced degree (master’s, PhD) or a foreign equivalent, or a bachelor’s degree with at least five years of progressive work experience.</li>
                            <li><strong>Exceptional Ability:</strong> Applicants can qualify by demonstrating exceptional ability in fields such as business, science, arts, or athletics. This requires a level of expertise significantly above that typically encountered in the field.</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 right-column">
                    <div className="right-content">
                        <h3>National Interest Waiver Requirement</h3>
                        <ul className="list-item clearfix">
                            <li><strong>Substantial Merit and National Importance:</strong> The proposed work must have significant value and national impact, whether in healthcare, education, research, or public safety.</li>
                            <li><strong>Well-Positioned to Advance the Endeavor:</strong> Applicants must prove they are well-qualified to advance their proposed work, demonstrating education, experience, and a successful track record.</li>
                            <li><strong>Benefit to the U.S.:</strong> The waiver must be in the best interest of the U.S., showing that requiring a labor certification would be detrimental.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="content-three">
            <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                    <div className="single-item">
                        <figure className="image-box"><img src="assets/images/resource/visa-13.jpg" alt="Application Process" /></figure>
                        <div className="lower-content">
                            <h3>Application Process for EB-2 NIW</h3>
                            <p>
                                - <strong>Prepare Evidence:</strong> Collect documents proving your qualifications, including degrees, work experience, and recommendation letters.<br/>
                                - <strong>File Form I-140:</strong> Submit the Immigrant Petition for Alien Workers to USCIS along with the necessary evidence.<br/>
                                - <strong>Concurrent Filing (Optional):</strong> If you're already in the U.S., you can file Form I-140 concurrently with Form I-485 (Adjustment of Status) to become a permanent resident.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                    <div className="single-item">
                        <figure className="image-box"><img src="assets/images/resource/visa-14.jpg" alt="EB-2 NIW Benefits" /></figure>
                        <div className="lower-content">
                            <h3>Key Benefits of EB-2 NIW</h3>
                            <p>
                                - <strong>Self-Petitioning:</strong> No need for a job offer or employer sponsorship.<br/>
                                - <strong>No Labor Certification:</strong> Bypasses the labor certification process, making the application faster and simpler.<br/>
                                - <strong>Permanent Residency:</strong> Applicants and their families receive a green card, allowing them to live and work in the U.S. permanently.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                    <div className="single-item">
                        <figure className="image-box"><img src="assets/images/resource/visa-15.jpg" alt="Contact Us for Help" /></figure>
                        <div className="lower-content">
                            <h3>Contact Us for Assistance</h3>
                            <p>
                                If you believe your qualifications align with the EB-2 NIW program and need help with your application, reach out to us. Our team of immigration experts can guide you through every step of the process, ensuring the best chance for success.
                            </p>
                            <ul className="list-item clearfix">
                                <li><Link href="visa-details">Learn more about the process</Link></li>
                                <li><Link href="visa-details">Contact our team for expert advice</Link></li>
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


