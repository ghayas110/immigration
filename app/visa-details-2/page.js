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
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Australia Subclass 190 Visa">
                {/* visa details section */}
                <section className="visa-details p_relative">
                <div className="auto-container">
                    <div className="row clearfix">
                    <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                        <div className="visa-sidebar default-sidebar">
                        <div className="sidebar-widget category-widget">
                            <ul className="category-list clearfix">
                            <li><Link href="visa-details">Australia SubClass 189</Link></li>
                                                  <li><Link href="visa-details-2"  className="current">Australia SubClass 190</Link></li>
                                                  <li><Link href="visa-details-3">Australia SubClass 491</Link></li>  
                                                  <li><Link href="visa-details-4">E2 Treaty Visa</Link></li>
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
        <h2>Australia Subclass 190 Visa</h2>
        <p>
          Australia's Subclass 190 Skilled Nominated Visa is a popular pathway for skilled workers looking to settle permanently in Australia. This visa offers an attractive option for those who want to contribute to the Australian economy and are seeking the opportunity to live, work, and study in the country indefinitely.
        </p>
      </div>
      <figure className="image-box"><img src="/assets/images/AustraliaSubclass190/Picture7.png" alt="Subclass 190 Visa" /></figure>
      <div className="lower-text">
        <p>
          This visa requires a nomination from an Australian state or territory and allows you to live, work, and study anywhere in Australia on a permanent basis, sponsor eligible relatives, and access Medicare.
        </p>
      </div>
    </div>
    <div className="content-two mb_35">
      <div className="row clearfix">
        <div className="col-lg-6 col-md-6 col-sm-12 left-column">
          <div className="left-content">
            <h3>Key Benefits of Subclass 190 Visa</h3>
            <p>
              The visa offers permanent residency, work flexibility, access to Australia's healthcare system, family sponsorship, and a pathway to citizenship.
            </p>
            <p>
              After the initial commitment to a state (usually 2 years), you can live and work anywhere in Australia, providing you with significant flexibility.
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 right-column">
          <div className="right-content">
            <h3>Eligibility Criteria</h3>
            <ul className="list-item clearfix">
              <li>1. Occupation on the Skilled Occupation List (SOL) </li>
              <li>2. State or Territory Nomination </li>
              <li>3. Points Test </li>
              <li>4. Skills Assessment </li>
              <li>5. Age and English Proficiency </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="content-three">
      <div className="row clearfix">
        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
          <div className="single-item">
            <figure className="image-box"><img src="/assets/images/AustraliaSubclass190/666.png" alt="Visa Application Process" /></figure>
            <div className="lower-content">
              <h3>Application Process</h3>
              <ul className="list-item clearfix">
                <li><Link href="visa-details">1. Submit an Expression of Interest (EOI)</Link></li>
                <li><Link href="visa-details">2. Receive State or Territory Nomination</Link></li>
                <li><Link href="visa-details">3. Lodge Your Visa Application</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
          <div className="single-item">
            <figure className="image-box"><img src="/assets/images/AustraliaSubclass190/555.png" alt="Health and Character Requirements" /></figure>
            <div className="lower-content">
              <h3>Health and Character Requirements</h3>
              <p>Applicants must meet Australia's health and character standards by undergoing medical examinations and providing police clearance certificates.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
          <div className="single-item">
            <figure className="image-box"><img src="/assets/images/AustraliaSubclass190/Picture8.png" alt="Pathway to Citizenship" /></figure>
            <div className="lower-content">
              <h3>Pathway to Citizenship</h3>
              <p>After fulfilling residency and other conditions, Subclass 190 visa holders may become eligible for Australian citizenship.</p>
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


