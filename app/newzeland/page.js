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

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
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
          <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="New Zealand">
              {/* countries section */}
              <section className="countries-details p_relative">
                  <div className="auto-container">
                      <div className="row clearfix">
                          <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                              <div className="countries-sidebar default-sidebar">
                                  <div className="sidebar-widget category-widget">
                                      <ul className="category-list clearfix">
                                           <li><Link href="newzeland" className="current">New Zealand</Link></li>
                                          <li><Link href="countries-details">United States</Link></li>
                                          {/* <li><Link href="countries-details-2" >New Zealand</Link></li> */}
                                          <li><Link href="countries-details-3">Canada</Link></li>
                                     
                                          <li><Link href="countries-details-6">Australia</Link></li>
                                      </ul>
                                  </div>
                                  <div className="sidebar-widget travel-widget">
                                      <div className="widget-content p_relative">
                                          <figure className="image-box"><img src="assets/images/resource/newzeland-2.jpeg" alt="Travel Pass" /></figure>
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
                                                  <a className={activeIndex == 2 ? "nav-link active" : "nav-link"}><h5><i className="icon-53"></i>Visitor Visa</h5></a>
                                              </li>
                                              <li className="nav-item" onClick={() => handleOnClick(3)}>
                                                  <a className={activeIndex == 3 ? "nav-link active" : "nav-link"}><h5><i className="icon-54"></i>Work Visa</h5></a>
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
                                                          <h2>Immigrate to New Zealand</h2>
                                                          <p>New Zealand offers a range of immigration options, from employment-based visas to family reunification. Whether you are a skilled worker or a family member, we provide guidance on the best pathway for you.</p>
                                                      </div>
                                                      <div className="two-column mb_30">
                                                          <div className="row clearfix">
                                                              <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                                  <figure className="image-box"><img src="assets/images/resource/newzeland-2.jpeg" alt="New Zealand Immigration" /></figure>
                                                              </div>
                                                              <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                                  <div className="text">
                                                                      <h3>New Zealand Immigration Assistance</h3>
                                                                      <p>New Zealand is known for its robust economy and high quality of life. We help you navigate through visa applications and residence permits, ensuring a smooth transition to life in New Zealand.</p>
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
                                                          <h2>Visitor Visas for New Zealand</h2>
                                                          <p>Whether you're traveling for leisure or business, New Zealand offers a variety of visitor visa options. We help you with the entire visa process, from documentation to visa interviews.</p>
                                                      </div>
                                                      <div className="two-column mb_30">
                                                          <div className="row clearfix">
                                                              <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                                  <figure className="image-box"><img src="assets/images/resource/newzeland-1.jpeg" alt="Visitor Visa to New Zealand" /></figure>
                                                              </div>
                                                              <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                                  <div className="text">
                                                                      <h3>Your Journey to New Zealand</h3>
                                                                      <p>We assist with visitor visa applications, making your trip to New Zealand as seamless as possible, whether for tourism, business, or family visits.</p>
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
                                                          <h2> Accredited Employer Work Visa</h2>
                                                          <p> New Zealand allows skilled workers to immigrate to New Zealand with a job offer from an accredited employer</p>
                                                      </div>
                                                      <div className="two-column mb_30">
                                                          <div className="row clearfix">
                                                              <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                                  <figure className="image-box"><img src="assets/images/resource/countries-15.jpg" alt="Accredited Employer Work Visa in New Zealand" /></figure>
                                                              </div>
                                                              <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                                  <div className="text">
                                                                      <h3>Secure Your Job in New Zealand</h3>
                                                                      <p>We offer a secure work visa solution for skilled workers looking to immigrate to New Zealand with a job offer from an accredited employer.</p>
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
                                                          <h2>Tourism in New Zealand</h2>
                                                          <p>Explore the rich history, culture, and natural beauty of New Zealand with a tourist visa. We ensure a hassle-free visa process so you can focus on enjoying your trip.</p>
                                                      </div>
                                                      <div className="two-column mb_30">
                                                          <div className="row clearfix">
                                                              <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                                  <figure className="image-box"><img src="assets/images/resource/newzeland.jpg" alt="Tourist Visa to New Zealand" /></figure>
                                                              </div>
                                                              <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                                  <div className="text">
                                                                      <h3>Enjoy Your New Zealand Adventure</h3>
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
              {/*countries details end*/}
          </Layout>
      </>
  )
}
