'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar }) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };

  return (
    <>
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={handleMobileMenu} />
        <div className="close-btn" onClick={handleMobileMenu}><span className="far fa-times" /></div>
        <nav className="menu-box">
          <div className="nav-logo">
            <Link href="/">
              <Image src="/assets/images/logo-2.png" width={100} height={100} alt="" />
            </Link>
          </div>
          <div className="menu-outer">
            <div
              className="collapse navbar-collapse show clearfix"
              id="navbarSupportedContent">
              <ul className="navigation clearfix">
                <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}>
                  <Link href="/">Home</Link>
                 
                </li>
                <li className={isActive.key == 2 ? "dropdown current" : "dropdown"}>
                  <Link href="/about-us">About</Link>
                
                </li>


                <li className={isActive.key == 4 ? "dropdown current" : "dropdown"}><Link href="/coaching">Coaching</Link>
                 
                </li>
                <li className={isActive.key == 5 ? "dropdown current" : "dropdown"}><Link href="/countries">Countries</Link>
                 
                </li>
                <li className={isActive.key == 6 ? "dropdown current" : "dropdown"}><Link href="/visa">Visa</Link>
              
                </li>
          
               
                <li><Link href="/contact" onClick={handleMobileMenu} >Contact</Link></li>
              </ul>
            </div>
          </div>
       
          {/*Social Links*/}
          <div className="social-links">
          <ul className="clearfix">
            <li><Link href="/"><span className="fab fa-twitter"></span></Link></li>
            <li><Link href="/"><span className="fab fa-facebook-square"></span></Link></li>
            <li><Link href="/"><span className="fab fa-pinterest-p"></span></Link></li>
            <li><Link href="/"><span className="fab fa-instagram"></span></Link></li>
            <li><Link href="/"><span className="fab fa-youtube"></span></Link></li>
          </ul>
          </div>
        </nav>
      </div>{/* End Mobile Menu */}
      <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />
    </>
  );
};

