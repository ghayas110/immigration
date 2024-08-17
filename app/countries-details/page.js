'use client'
import Link from "next/link";
import Layout from "@/components/layout/Layout"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useState } from 'react'

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 0,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}

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
          <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="United States">
              {/* countries section */}
              <section className="countries-details p_relative">
                  <div className="auto-container">
                      <div className="row clearfix">
                          <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                              <div className="countries-sidebar default-sidebar">
                                  <div className="sidebar-widget category-widget">
                                      <ul className="category-list clearfix">
                                          <li><Link href="countries-details" className="current">United States</Link></li>
                                          <li><Link href="countries-details-2">Germany</Link></li>
                                          <li><Link href="countries-details-3">Canada</Link></li>
                                          <li><Link href="countries-details-6">Australia</Link></li>
                                      </ul>
                                  </div>
                                  <div className="sidebar-widget travel-widget">
                                      <div className="widget-content p_relative">
                                          <figure className="image-box"><img src="assets/images/resource/travel-1.jpg" alt="Travel Pass" /></figure>
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
                                          <div className="icon-shape"><img src="assets/images/icons/icon-15.png" alt="Download Icon" /></div>
                                          <h3>Annual Report / <br />Online Appointment</h3>
                                          <ul className="download-list clearfix">
                                              <li>
                                                  <Link href="coaching-details">
                                                      <i className="icon-50"></i>
                                                      <p>Application Form</p>
                                                      <span>450kb</span>
                                                  </Link>
                                              </li>
                                              <li>
                                                  <Link href="coaching-details">
                                                      <i className="icon-50"></i>
                                                      <p>Guidelines</p>
                                                      <span>350kb</span>
                                                  </Link>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                              <div className="countries-details-content">
                                  <div className="tabs-box">
                                      <div className="tab-btn-box pb_60">
                                          <ul className="tab-btns tab-buttons clearfix" role="tablist">
                                              <li className="nav-link" onClick={() => handleOnClick(1)}>
                                                  <a className={activeIndex == 1 ? "nav-link active" : "nav-link"}><h5><i className="icon-52"></i>Immigration</h5></a>
                                              </li>
                                              <li className="nav-item" onClick={() => handleOnClick(2)}>
                                                  <a className={activeIndex == 2 ? "nav-link active" : "nav-link"}><h5><i className="icon-53"></i>Visitor visas</h5></a>
                                              </li>
                                              <li className="nav-item" onClick={() => handleOnClick(3)}>
                                                  <a className={activeIndex == 3 ? "nav-link active" : "nav-link"}><h5><i className="icon-54"></i>Education</h5></a>
                                              </li>
                                              <li className="nav-item" onClick={() => handleOnClick(4)}>
                                                  <a className={activeIndex == 4 ? "nav-link active" : "nav-link"}><h5><i className="icon-55"></i>Tourist</h5></a>
                                              </li>
                                          </ul>
                                      </div>
                                      <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                          {/* Immigration Tab */}
                                          <div className={activeIndex == 1 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                              <div className="content-box">
                                                  <div className="content-one mb_30">
                                                      <div className="upper-text mb_30">
                                                          <h2>Immigrate to United States</h2>
                                                          <p>Explore various immigration pathways to the United States, including family-based, employment-based, and diversity visas. Whether you're looking to relocate permanently or temporarily, we guide you through every step of the process.</p>
                                                      </div>
                                                      <div className="two-column mb_30">
                                                          <div className="row clearfix">
                                                              <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                                  <figure className="image-box"><img src="assets/images/resource/countries-13.jpg" alt="United States Immigration" /></figure>
                                                              </div>
                                                              <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                                  <div className="text">
                                                                      <h3>Ensure Smooth Immigration</h3>
                                                                      <p>We help you understand the complexities of U.S. immigration laws, ensuring a seamless and successful application process for visas and green cards.</p>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          {/* Visitor Visa Tab */}
                                          <div className={activeIndex == 2 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                              <div className="content-box">
                                                  <div className="content-one mb_30">
                                                      <div className="upper-text mb_30">
                                                          <h2>Visitor Visas for the United States</h2>
                                                          <p>The United States offers a variety of visitor visas, from tourism to business. Find out which visa category best suits your needs and how we can assist you in securing your stay.</p>
                                                      </div>
                                                      <div className="two-column mb_30">
                                                          <div className="row clearfix">
                                                              <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                                  <figure className="image-box"><img src="assets/images/resource/countries-14.jpg" alt="Visitor Visa to United States" /></figure>
                                                              </div>
                                                              <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                                  <div className="text">
                                                                      <h3>Your Path to Visiting the U.S.</h3>
                                                                      <p>Our experts help you with the entire visitor visa process, from documentation to interviews, ensuring a smooth and hassle-free experience.</p>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          {/* Education Tab */}
                                          <div className={activeIndex == 3 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                              <div className="content-box">
                                                  <div className="content-one mb_30">
                                                      <div className="upper-text mb_30">
                                                          <h2>Study in the United States</h2>
                                                          <p>The United States is home to some of the world's top-ranked universities. Let us help you secure a student visa and provide guidance on the admissions process, scholarships, and more.</p>
                                                      </div>
                                                      <div className="two-column mb_30">
                                                          <div className="row clearfix">
                                                              <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                                  <figure className="image-box"><img src="assets/images/resource/countries-15.jpg" alt="Study in the USA" /></figure>
                                                              </div>
                                                              <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                                  <div className="text">
                                                                      <h3>Secure Your Future Education</h3>
                                                                      <p>We provide comprehensive support to international students looking to study in the U.S., including university applications, visa processes, and post-graduation options.</p>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          {/* Tourist Visa Tab */}
                                          <div className={activeIndex == 4 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                              <div className="content-box">
                                                  <div className="content-one mb_30">
                                                      <div className="upper-text mb_30">
                                                          <h2>Tourism in the United States</h2>
                                                          <p>Discover the beauty of the United States with a tourist visa. Explore landmarks, natural wonders, and cities while ensuring that your visa process is seamless and stress-free.</p>
                                                      </div>
                                                      <div className="two-column mb_30">
                                                          <div className="row clearfix">
                                                              <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                                  <figure className="image-box"><img src="assets/images/resource/countries-15.jpg" alt="Tourist Visa for United States" /></figure>
                                                              </div>
                                                              <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                                  <div className="text">
                                                                      <h3>Enjoy Your U.S. Visit</h3>
                                                                      <p>Our team helps you navigate the tourist visa application, ensuring you can focus on your travels while we take care of the paperwork.</p>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
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
              {/* countries details end */}
          </Layout>
      </>
  )
}
