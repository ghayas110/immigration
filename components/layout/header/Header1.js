'use client'
import Link from "next/link";
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            <header className={`main-header ${scroll ? "fixed-header" : ""}`}>
                {/* Header Top */}
                <div className="header-top">
      <div className="outer-container">
        <div className="top-inner">
          <div className="top-left">
            <ul className="info clearfix">
              <li><i className="icon-1"></i><Link href="mailto:support@ahiraf.com">support@ahiraf.com</Link></li>
              <li><i className="icon-2"></i>Office No. 301, Building No. 56-B Commercial Area A, DHA Phase 2</li>
              <li><i className="icon-3"></i> Mon - Sat: 10 AM - 6 PM</li>
            </ul>
          </div>
          <div className="top-right">
            <ul className="social-links clearfix">
              <li><Link href="/"><i className="icon-4"></i></Link></li>
              <li><Link href="/"><i className="icon-5"></i></Link></li>
              <li><Link href="/"><i className="icon-6"></i></Link></li>
              <li><Link href="/"><i className="icon-7"></i></Link></li>
            </ul>
         
            <div className="btn-box">
              <Link href="/contact"><span>Appointment</span></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
                   
                {/* Header lower */}
                <div className="header-lower">
      <div className="outer-box clearfix">
        <div className="logo-box">
          <figure className="logo"><Link href="/">
          <img src="/assets/images/logo.png" alt="" width="128" height="44" />
                    </Link></figure>
        </div>
        <div className="nav-outer">
          <div className="menu-area clearfix">
            {/* Mobile Navigation Toggler */}
            <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
              <i className="icon-bar"></i>
              <i className="icon-bar"></i>
              <i className="icon-bar"></i>
            </div>
            <nav className="main-menu navbar-expand-md navbar-light">
              <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                     <Menu/>
              </div>
            </nav>
          </div>
          <div className="support-box">
            <figure className="image-box"><img src="/assets/images/shape/h.png" alt="" /></figure>
            <span>Enquiries</span>
            <Link href="tel:+923179650314">+92 317 9650314</Link>
          </div>
        </div>
      </div>
    </div>
                {/* Header lower */}
             
               
                {/* Sticky Header  */}
                <div className="sticky-header">
      <div className="auto-container">
        <div className="outer-box">
          <div className="logo-box">
            <figure className="logo"><Link href="/">
            <img src="/assets/images/logo.png" alt="" width="128" height="44" />
            </Link></figure>
          </div>
          <div className="menu-area clearfix">
          <nav className="main-menu navbar-expand-md navbar-light clearfix">
            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                <Menu/>
            </div>
        </nav>
          </div>
          <div className="support-box">
          <figure className="image-box"><img src="/assets/images/shape/h.png" alt="" /></figure>
          <span>Enquiries</span>
          <Link href="tel:+923179650314">+92 317 9650314</Link>
          </div>
        </div>
      </div>
    </div>
                {/* Sticky Header  */}
               {/* End Sticky Menu */}
                {/* Mobile Menu  */}

                <MobileMenu handleMobileMenu={handleMobileMenu} />
            </header>
        </>
    )
}
